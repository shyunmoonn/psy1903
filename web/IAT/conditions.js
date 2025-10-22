// --- Setup---
let jsPsych = initJsPsych({
    on_finish: () => {
        jsPsych.data.displayData(); // remove if you don't want the data screen at the end
    }
});

let timeline = [];


//Practice Trials 
let posP = ['Brilliant', 'Cheerful', 'Comfort', 'Perfect']
let negP = ['Agony', 'Abuse', 'Mean', 'Hurt']
let demP = ['Liberal', 'Left-Wing', 'Pro-choice', 'Gun-control']
let repP = ['Pro-life', 'Tax-cut', 'RNC', 'State-rights']


let posPshuffled = jsPsych.randomization.shuffle(posP)
let negPshuffled = jsPsych.randomization.shuffle(negP)
let demPshuffled = jsPsych.randomization.shuffle(demP)
let repPshuffled = jsPsych.randomization.shuffle(repP)

// pBlock 1
let pBlock1 = [
    ...posPshuffled.slice(0, 2),
    ...negPshuffled.slice(0, 2),
    ...demPshuffled.slice(0, 2),
    ...repPshuffled.slice(0, 2),
]

let pBlock1Shuffled = jsPsych.randomization.shuffle(pBlock1)

// pBlock 2
let pBlock2 = [
    ...posPshuffled.slice(2, 4),
    ...negPshuffled.slice(2, 4),
    ...demPshuffled.slice(2, 4),
    ...repPshuffled.slice(2, 4),
]

let pBlock2Shuffled = jsPsych.randomization.shuffle(pBlock2)


// Words
let positive = ['Freedom', 'Happy', 'Honest', 'Fairness', 'Joy', 'Trustworthy', 'Peace', 'Generous'];
let negative = ['Evil', 'Corrupt', 'Cowardly', 'Terrible', 'Nasty', 'Cruel', 'Dishonest', 'Greed'];
let democrat = ['Biden', 'DEI', 'Obama', 'Blue', 'Kamala', 'Medicaid', 'Welfare', 'Climate Change'];
let republican = ['GOP', 'Trump', 'Conservative', 'Red', 'MAGA', 'Right-Wing', 'NRA', 'Fox News'];


let positiveShuffled = jsPsych.randomization.shuffle(positive)
let negativeShuffled = jsPsych.randomization.shuffle(negative)
let democratShuffled = jsPsych.randomization.shuffle(democrat)
let republicanShuffled = jsPsych.randomization.shuffle(republican)

// Block 1
let block1 = [
    ...positiveShuffled.slice(0, 4),
    ...negativeShuffled.slice(0, 4),
    ...democratShuffled.slice(0, 4),
    ...republicanShuffled.slice(0, 4),
]

let block1Shuffled = jsPsych.randomization.shuffle(block1)

// Block 2
let block2 = [
    ...positiveShuffled.slice(4, 8),
    ...negativeShuffled.slice(4, 8),
    ...democratShuffled.slice(4, 8),
    ...republicanShuffled.slice(4, 8),
]

let block2Shuffled = jsPsych.randomization.shuffle(block2)





