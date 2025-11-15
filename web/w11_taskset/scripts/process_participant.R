process_participant <- function(file_path) {
  
  ## subject_id
  subject_id <- sub("\\.csv$", "", basename(file_path))
  
  ## import csv file
  data <- read.csv(file_path, stringsAsFactors = FALSE)
  
  
  #### Fix Error ####
  
  ## To fix, adapt this code and place it BETWEEN reading in the csv and checking the columns are present (the code block above). This fix needs to be done on each raw csv (so you must load it in via process_participant first) and before the column names check (or else it will fail)
  
  if ("trial_type" %in% names(data) &&
      !"trialType" %in% names(data)) {
    
    warning(
      paste(
        "Column 'trial_type' found in",
        sub("\\.csv$", "", basename(file_path)),
        "-- renaming to 'trialType'."
      )
    )
    
    ## Look up the column names of participant_data, find the position where the name
    ## equals "trial_type", and replace that name with "trialType".
    names(data)[names(data) == "trial_type"] <- "trialType"
  }
    
    ## Check that required columns are present
    required_cols <- c("rt", "correct", "trialType")
    if (!all(required_cols %in% names(data))) {
      stop(
        paste(
          "Input data frame missing required columns in",
          sub("\\.csv$", "", basename(file_path)),
          "\nExpected:",
          paste(required_cols, collapse = ", "),
          "\nFound:",
          paste(names(data), collapse = ", ")
        )
      )
    }
    
  
  
  ##rt if missing
  data <- compute_rt_if_missing(data)
  
  # ## trial_type -> trialType
  # trial_type <- names(data) == "trial_type"
  # 
  # if (length(trial_type) > 0) {
  #   names(data)[trial_type] <- "trialType"
  # }
    
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
