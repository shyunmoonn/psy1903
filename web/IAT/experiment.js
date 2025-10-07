let jsPsych = initJsPsych();

let timeline = [];

//box around words
let blockIntroTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
          <p>You are about to see a series of characters.</p>
          <p>If the characters make up a word, press the <span class='key'>F</span> key.</p>
          <p>If the characters do not make up a word, press the <span class='key'>J</span> key.</p>
          <p>Press <span class='key'>SPACE</span> to begin.</p>
          `,
    choices: [' '],
};
timeline.push(blockIntroTrial);

let trial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['f', 'j'],
    stimulus: `
        <span class='category1'> <strong>family</strong> (press F)</span>
        <span class='category2'> <strong>career</strong> (press J)</span>
        <p class='word'>home</p>`
    ,
};
timeline.push(trial);

//loader
let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: function () {
        return `
                <h1>Please wait...</h1>
                <span class='loader'></span>
                <p>We are saving the results of your inputs.</p>
            `;
    }
}
timeline.push(resultsTrial);


jsPsych.run(timeline);