let jsPsych = initJsPsych();
let conditions = [];


let positive = ['Freedom', 'Happy', 'Honest', 'Fairness', 'Joy', 'Trustworthy', 'Peace', 'Generous']
let negative = ['Evil', 'Corrupt', 'Racist', 'Terrible', 'Nasty', 'Cruel', 'Dishonest', 'Greed']
let democrat = ['word 13', 'word 23', 'word 33', 'word 43']
let republican = ['word 14', 'word 24', 'word 34', 'word 44']




for (let i = 0; i < 15; i++) {
    let word1 = jsPsych.randomization.repeat(positive, 4)[0];
    let word2 = jsPsych.randomization.repeat(democrat, 4)[0];


    conditions.push({
        word1: word1,
        word2: word2,
    })




}


pDnR = []