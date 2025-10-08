let timeline = [];


//Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
   <h1> Welcome to Political IAT </h1>
   <p> Instructions.</p>
   <p>Press <span class='key'>SPACE</span> to begin.</p>
   `,


    choices: [' '],


};


timeline.push(welcomeTrial);
console.log("Hello")


//Block 1 Instructions


let Block1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
   <p> For your first, trial, please do this.</p>
   <p>Press SPACE to begin.</p>
   `,
    choices: [' '],


};


timeline.push(Block1)


//Trial
for (let condition of conditions) {
    trial = {
        type: jsPsychHtmlKeyboardResponse,
        choices: ['f', 'j'],
        stimulus: `
       <span class='category1'> <strong>Positive OR Democrat</strong> (press F)</span>
       <span class='category2'> <strong>Negative OR Republican</strong> (press J)</span>
       <p class='word'>${condition.target}</p>
       `
        ,


    }
}




timeline.push(trial)




jsPsych.run(timeline);
