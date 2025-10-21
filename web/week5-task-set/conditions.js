/*words

let conditions = [
    { characters: 'cat', isWord: true },
    { characters: 'pin', isWord: true },
    { characters: 'jgb', isWord: false },
    { characters: 'mub', isWord: false },
];
*/


/*---Math Response Time Task---
let conditions = [
    { num1: 5, num2: 4, correctAnswer: 9 },
    { num1: 9, num2: 1, correctAnswer: 10 },
    { num1: 3, num2: 3, correctAnswer: 3 },
];
*/

/*---Looping conditions---
for (let condition of conditions) {
    let conditionTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<h1>${condition.conditions}</h1>`,
        choices: ['f', 'j'],                                  // Listen for either the f or j key to proceed

    };

    timeline.push(conditionTrial);
}

*/


//---Numerical for-Loop (repeating a block of code a certain number of times) for generating conditions programmatically---
function getrandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

let conditions = [];                        //add it outside the for loop so the results accumulate after each loop 

for (let i = 0; i < 3; i++) {               //Run the code inside the braces three times 
    let num1 = getrandomNumber(1, 10);
    let num2 = getrandomNumber(1, 10);
    let correctAnswer = num1 + num2;
    conditions.push({                        //adds an object to the conditions array 
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
    });
};

console.log(conditions);
