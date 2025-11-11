score_questionnaire <- function(json_string, reverse = c(2,4,7), scale_min = 0L, scale_max = 4L) {
    
#### score_questionnaire.R -----------------------------------------------------
## Purpose: Take a JSON string from the questionnaire row and return a single score.
## Scale: jsPsychSurveyLikert default 0–4. Reverse items: 2, 4, 7.

## 1) Parse the JSON string into an R object
##    Use jsonlite::fromJSON() to convert the text into a list.
## Example:
responses <- fromJSON(json_string)

## 2) Flatten and convert to numeric
##    Use unlist() to turn the list into a vector and coerce to numeric if needed.
## Example:
responses <- as.numeric(unlist(responses))

## 3) Reverse-score the specified items
rev_items <- c(2, 4, 7)
responses[rev_items] <- 4 - responses[rev_items]

## 5) Compute the final score
mean_score <- mean(responses, na.rm = TRUE)
}