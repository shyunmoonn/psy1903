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

for (let i = 0; i < 3; i++)
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

