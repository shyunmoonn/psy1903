process_participant <- function(file_path) {
  
  ## subject_id
  subject_id <- sub("\\.csv$", "", basename(file_path))
  
  ## import csv file
  data <- read.csv(file_path, stringsAsFactors = FALSE)
  
  ##rt if missing
  data <- compute_rt_if_missing(data)
  
  ## trial_type -> trialType
  trial_type <- names(data) == "trial_type"
  
  if (length(trial_type) > 0) {
    names(data)[trial_type] <- "trialType"
  }
    
  ##summarize behavior
  behavior <- summarize_behavior(data, rt_min = 300, rt_max = 900)
  
  
  ## esq_sum
  esq_sum <- score_questionnaire(
    json_string = data[data$trialType == "es_questionnaire", "response"],
    reverse = c(2, 5, 9),
    scale_min = 0L,
    scale_max = 4L
  )
  
  ## combining ID, behavioral summaries, questionnaire score
  oneRow <- data.frame(
    subject_id = subject_id,
    mean_rt_correct = behavior$mean_rt_correct,
    mean_accuracy = behavior$mean_accuracy,
    esq_sum = esq_sum
  )
  
  ## CSV
  write.csv(
    oneRow,
    file = here::here("data", "cleaned", paste0(subject_id, "_processed.csv")),
    row.names = FALSE
  )
  
  #### Return output ------------------------------------------------------
  stopifnot(nrow(oneRow) == 1)  # one row per participant
  return(oneRow)

}
