// Create a randomized array of colors
let colors = jsPsych.randomization.repeat(['red', 'green', 'blue'], 1);

// Choose the last color from the colors array
let color = colors.pop();

let trial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['f', 'j'],
    // Dynamically set the class based on our randomly chosen color
    stimulus: `
        <span class='${color}'>ball</span>`
    ,
};
timeline.push(trial);