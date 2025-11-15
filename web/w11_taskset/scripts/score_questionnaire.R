library(jsonlite) 

score_questionnaire <- function(json_string, reverse = c(2,5,9), scale_min = 0L, scale_max = 4L) {

  
#### 6.1 Score ESQ-9 -----------
responses <- fromJSON(json_string)
responses <- as.numeric(unlist(responses))

rev_items <- c(2, 5, 9)
responses[rev_items] <- 4 - responses[rev_items]

## compute sum score 
sum_score <- sum(responses, na.rm = TRUE)
return(sum_score)

}






