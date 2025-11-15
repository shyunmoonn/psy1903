# ## For Loops
# compute_rt_if_missing <- function(data) {
#   for (i in 1:nrow(data)) {
#     if (is.na(data[i, "rt"]) && 
#         !is.na(data[i, "stim_onset_ms"]) && 
#         !is.na(data[i, "resp_time_ms"]) &&
#         !is.na(data[i, "response"])) {
#       data[i, "rt"] <- data[i, "resp_time_ms"] - data[i, "stim_onset_ms"]
#         } 
#     }
#  return(data)
#   }

#### Vectorized ----------
compute_rt_if_missing <- function(data) {
  data$rt <- ifelse(
    is.na(data$rt) & 
      !is.na(data$stim_onset_ms) &
      !is.na(data$resp_time_ms) &
      !is.na(data$response),
    data$resp_time_ms - data$stim_onset_ms,
    data$rt
  )
  return(data)
}

# #### 5.2 Demonstrate & Reflect ---------
# participant1 <- read.csv("data/raw/est-experiment-2025-11-05-09-04-45.csv")
# 
# mean_before <- mean(participant1$rt, na.rm = TRUE)
# 
# afterFunction <- compute_rt_if_missing(participant1)
# 
# mean_after <- mean(afterFunction$rt, na.rm = TRUE)
# 
# print(mean_before)
# print(mean_after)