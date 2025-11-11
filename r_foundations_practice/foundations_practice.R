## Name: Shyun Moon
## Date: 10-30-2025
## Description: R Week 9 PSet

## Q2.1 -----------------
age <- 19
name <- "Shyun"
is_psych_major <- TRUE
favorite_numbers <- c(6, 12, 36, 42)

typeof(age)
class(age)

typeof(name)
class(name)

typeof(is_psych_major)
class(is_psych_major)

typeof(favorite_numbers)
class(favorite_numbers)

## Q2.2 Create RTs ----------------

rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, 500)

mean_rt <- mean(rt)

sd(rt)

rt_adjusted <- rt + 50
print(rt_adjusted)

mean_diff <- mean(rt_adjusted) - mean(rt)
print(mean_diff)

## Q2.3 Add Missingness -----------
rt[5] <- NA

mean(rt, na.rm = TRUE)

## Q2.4 Investigate Data Frame -----------
summary(rt)
str(rt)

## Q3.1 Create Vectors -----------
subject_id <- 1:10
congruent <- c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE)
condition <- c("control", "control", "incongruent", "control", "incongruent",
               "control", "incongruent", "incongruent", "control", "incongruent")

experiment_data <- data.frame(subject_id, congruent, condition, rt)    ## use vectors as columns to make a data frame

print(experiment_data)


## Q3.2 Inspect Data Frame -----------
head(experiment_data)
tail(experiment_data)
summary(experiment_data)
str(experiment_data)

## head shows the first 6 rows, 
## tail shows the last six rows 
## summary shows the min, quartiles, median, mean, max of the subject ID and reaction time; number of TRUE's and FALSE's, length, class, mode )
## str shows number of observations and variables, type of each column, and first few values in each column. 

## Q3.3 Index Data Frame ---------
experiment_data$rt[3]  ##column 'rt', row 3
experiment_data$rt[experiment_data$rt > 500] ##in rt column, whatever rt is greater than 500
experiment_data[1:5, c("subject_id", "rt")] ##in experiment data, rows 1 to 5, columns subject_id and rt
experiment_data[4, ] ##in experiment data, row four and all columns. 
experiment_data$condition ##column 'condition' of experiment data 
experiment_data[, "condition"] ##in experiment_data, all rows of column 'condition' 

## Q3.4 Logical Subsetting --------- 
fast_trials <- experiment_data[experiment_data$rt < 500, ] ##in experiment data, keep rows in 'rt' column in experiment data if less than 500, keep all columns
incongruent_trials <- experiment_data[experiment_data$congruent == FALSE, ] ##in experiment data, keep all columns, only keep rows where the 'congruent' column data is FALSE
fast_incongruent <- experiment_data[experiment_data$rt < 500 & experiment_data$congruent == FALSE, ]

nrow(fast_trials) ## shows how many rows there are
nrow(incongruent_trials)
nrow(fast_incongruent)

print(fast_trials)

## Q3.5 Logical Subsetting ---------
sapply(experiment_data, typeof) ##for each column in experiment data, tell me what type of data it is and return the results in a simple vector.
experiment_data$condition <- as.factor(experiment_data$condition) ##convert the condition column in experiment data into a factor 
str(experiment_data)

## Q4.1 Congruent RT ----------

experiment_data[experiment_data$rt,]

mean(experiment_data$rt[experiment_data$congruent == TRUE], na.rm = TRUE) ##Calculate the mean reaction time (rt) for trials where congruent is TRUE, ignoring any missing values.
mean(experiment_data$rt[experiment_data$congruent == FALSE], na.rm = TRUE)

## Q4.2 Condition RT --------
mean(experiment_data$rt[experiment_data$condition == "control"], na.rm = TRUE) ##calculate the mean reaction time for condition = control, removing all NA values
mean(experiment_data$rt[experiment_data$condition == "incongruent"], na.rm = TRUE)

## Q4.3 Difference Score --------
mean_congruent <- mean(experiment_data$rt[experiment_data$congruent == TRUE], na.rm = TRUE) ##create new variable to store the calculation of the mean of reaction time where column congruent is TRUE  
mean_incongruent <- mean(experiment_data$rt[experiment_data$congruent == FALSE], na.rm = TRUE)
congruency_effect <- mean_congruent - mean_incongruent

mean_congruent

print(paste("The congruency effect was", congruency_effect, "milliseconds.")) ##combine pieces into string, then print it. 

## Q5.1 Z-score --------
mean_rt <- mean(experiment_data$rt, na.rm = TRUE) ##
sd_rt <- sd(experiment_data$rt, na.rm = TRUE)
experiment_data$rt_z <- (experiment_data$rt - mean_rt)/sd_rt
head(experiment_data)

## Q5.2 Logical Variable-----------
experiment_data$fast <- experiment_data$rt < 500 
head(experiment_data)

## Q5.3 New Participant -------------
new_participant <- data.frame(
  subject_id = 11, 
  rt = 470,
  congruent = TRUE,
  condition = "control",
  rt_z = NA,
  fast = TRUE
)

experiment_data <- rbind(experiment_data, new_participant) ##bind new_participant to experiment_data
tail(experiment_data) 

## Q5.4 Removing a Column---------
experiment_data$rt_z <- NULL 
names(experiment_data) 

## Q5.5 Subset -------------
clean_data <- experiment_data[!is.na(experiment_data$rt) & ##“Make a new dataset called clean_data that keeps only the rows in experiment_data where rt is not missing and between 300 and 700 milliseconds.”
                                            experiment_data$rt >= 300 &
                                            experiment_data$rt <= 700, ]
nrow(clean_data)

mean(clean_data$rt)
mean(experiment_data$rt, na.rm = TRUE)
