#### 6.2 Convert and Filter ------------

summarize_behavior <- function(data, rt_min = 300, rt_max = 900) {
  #Ensure all expected column names are there
  if (!all(c("trialType", "block", "condition", "color", "word", "rt", "response", "correct", "stim_onset_ms", "resp_time_ms") %in% names(data))) {
    warning("Some expected columns are missing. Check your CSV.")
  }
  
## convert to logical
data$correct <- as.logical(data$correct)

## mean accuracy (proportion correct)
  mean_accuracy <- mean(data$correct, na.rm = TRUE)
  
## data_correct object
  data_correct <- data[data$correct == TRUE, ]
  
## mean RT on correct trials only, only 300-900ms, excluding NA
  rt_filtered  <- data_correct[
    data_correct$rt  >= rt_min & 
    data_correct$rt  <= rt_max, ]
  mean_rt_correct <- mean(rt_filtered$rt, na.rm = TRUE)
  
## return single row data frame 'behavior'
behavior <- data.frame(
  mean_rt_correct = mean_rt_correct, 
  mean_accuracy = mean_accuracy
)
return(behavior)
}

