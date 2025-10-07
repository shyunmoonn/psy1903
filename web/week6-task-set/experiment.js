/*
let jsPsych = initJsPsych();

let timeline = [];

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);


//3 trials
let mathTrial = [];

for (let i = 0; i < 3; i++) {
    mathTrial.push({
        type: jsPsychSurveyHtmlForm,
        preamble: `<p>What is ${conditions[i].num1} + ${conditions[i].num2}?</p>`,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer',
        button_label: 'Submit Answer',
        data: {
            collect: true,
            num1: conditions[i].num1,
            num2: conditions[i].num2,
            correctAnswer: conditions[i].num1 + conditions[i].num2,
        },
        on_finish: function (data) {
            data.answer = data.response.answer;
            data.correct = (data.answer === data.correctAnswer);
        }
    })
};

timeline.push(mathTrial);

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);
*/






/*
let jsPsych = initJsPsych();

let timeline = [];

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class='headingHighlight'>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);


//3 trials

for (let i = 0; i < 3; i++) {
    let num1 = conditions[i].num1;
    let num2 = conditions[i].num2;
    let correctAnswer = conditions[i].correctAnswer;
    let altAnswer = Math.floor(Math.random() * 10) + 1;

    // the 'while' loop ensures that altAnswer isn't the same as correctAnswer by picking a new random number until altAnswer is not equal to correctAnswer.      
    while (altAnswer === correctAnswer) {
        altAnswer = Math.floor(Math.random() * 10) + 1;
    }

    //randomizing the order of answer choies 
    const choices = jsPsych.randomization.shuffle([altAnswer, correctAnswer]);

    let mathTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>What is ${num1} + ${num2}?</p>`,
        choices: choices,
        data: {
            collect: true,
            correctAnswer: correctAnswer,
            altAnswer: altAnswer,
            num1: num1,
            num2: num2
        },
        on_finish: function (data) {
            data.answer = choices[data.response];
            data.correct = (choices[data.response] === correctAnswer);
        }
    }
    timeline.push(mathTrial);
};


// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: 'NO_KEYS',
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }

}
timeline.push(debriefTrial);

jsPsych.run(timeline);
*/






let jsPsych = initJsPsych();

let timeline = [];

let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1 class='headingHighlight'>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);


//3 trials
let mathTrial = [];

for (let i = 0; i < 3; i++) {
    mathTrial.push({
        type: jsPsychSurveyHtmlForm,
        preamble: `<p class='equationsSize'>What is <span class='numbersHighlight'>${conditions[i].num1}</span> + <span class='numbersHighlight'>${conditions[i].num2}?</span></p>`,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer',
        button_label: 'Submit Answer',
        data: {
            collect: true,
            num1: conditions[i].num1,
            num2: conditions[i].num2,
            correctAnswer: conditions[i].num1 + conditions[i].num2,
        },
        on_finish: function (data) {
            data.answer = data.response.answer;
            data.correct = (data.answer === data.correctAnswer);
        }
    })
};

timeline.push(mathTrial);

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);