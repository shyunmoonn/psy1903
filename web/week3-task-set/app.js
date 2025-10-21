/*
alert & prompt
random number generator (1-10): Math.floor(Math.random() * 10) + 1
reaction time measurement: Date.now() before and after; rt = (end - start) / 1000
if number = correct: response == (randomNum1 + randomNum2)
even/odd test: response % 2 == 0
if/ else if/ else
submit listener: form.addEventListener('submit', fn)
string handling: .length, .charAt(0), .charAt(count - 1)


/*
// Identify elements on the page we will update 
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

//random number
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

//update elements on page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2; 
*/

/* let response = prompt('What is your name?');

let count = response.length

let firstLetter = response.charAt(0);
console.log(firstLetter);

let lastLetter = response.charAt(count - 1);
*/

/*
let a = 5;
let b = 10;
console.log(a > 3 && b < 15);

let over18 = false;
let hasGuardianApproval = true;
console.log(over18 || hasGuardianApproval);

let count = 8;
console.log(count % 2 == 0);
*/

/*
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

//random number
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

//update elements on page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;

let response = prompt('What is ' + randomNum1 + ' + ' + randomNum2 + '?');

// variables
let feedback = '';

let correct = (randomNum1 + randomNum2);

//conditional messages
if (response == correct) {
    feedback = 'Correct!';
} else if (response == (correct - 1) || (correct + 2)) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

alert(feedback + ' The expected answer is ' + (correct));
*/

/*

let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
}
if (18 > age >= 12) {
    alert('Teenager');
}
if (age >= 18) {
    alert('Adult');
}
*/

/*
response = prompt('Please enter a whole number')
if (response % 2 == 0) {
    alert('The number you entered was even.')
} else {
    alert('The number you entered was odd.');
}
*/

/*
alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.")

//random number
let randomNum11 = Math.floor(Math.random() * 10) + 1;
let randomNum12 = Math.floor(Math.random() * 10) + 1;

let randomNum21 = Math.floor(Math.random() * 10) + 1;
let randomNum22 = Math.floor(Math.random() * 10) + 1;

let randomNum31 = Math.floor(Math.random() * 10) + 1;
let randomNum32 = Math.floor(Math.random() * 10) + 1;


let start1 = Date.now()
let answer1 = prompt('What is ' + randomNum11 + ' + ' + randomNum12 + ' ?');
let end1 = Date.now()
let result1 = (end1 - start1) / 1000
if (answer1 == (randomNum11 + randomNum12)) {
    corin1 = ('CORRECT');
} else (corin1 = 'INCORRECT');
alert('You answered ' + answer1 + ' in ' + result1 + ' seconds.' + ' Your answer was ' + corin1);


let start2 = Date.now()
let answer2 = prompt('What is ' + randomNum21 + ' + ' + randomNum22 + ' ?');
let end2 = Date.now()
let result2 = (end2 - start2) / 1000
if (answer2 == (randomNum21 + randomNum22)) {
    corin2 = ('CORRECT');
} else (corin2 = 'INCORRECT');
alert('You answered ' + answer2 + ' in ' + result2 + ' seconds.' + ' Your answer was ' + corin2);

let start3 = Date.now()
let answer3 = prompt('What is ' + randomNum31 + ' + ' + randomNum32 + ' ?');
let end3 = Date.now()
let result3 = (end3 - start3) / 1000
if (answer3 == (randomNum31 + randomNum32)) {
    corin3 = ('CORRECT');
} else (corin3 = 'INCORRECT');
alert('You answered ' + answer3 + ' in ' + result3 + ' seconds.' + ' Your answer was ' + corin3);
*/


/*
// Create variables to store references to elements on the page
let start1 = Date.now()

let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');

// Identify elements on the page we will update 
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

//random number
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

//update elements on page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;


// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    let end1 = Date.now()
    let result = (end1 - start1) / 1000

    // Collect the response
    let response = form.elements['problem'].value;

    if (response == (randomNum1 + randomNum2)) {
        corin = ('CORRECT.');
    } else (corin = 'INCORRECT.');

    let resultsMessage = ('You answered ' + response + ' in ' + result + ' seconds.' + ' Your answer was ' + corin);

    // Report the results
    results.innerHTML = resultsMessage;

    form.style.display = 'none';
});
*/

/*
//random number
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

let response = prompt('What is ' + randomNum1 + ' + ' + randomNum2 + '?');

// variables
let feedback = '';

let correct = (randomNum1 + randomNum2);

//conditional messages
if (response == correct) {
    feedback = 'Correct!'
} else if (response == (correct - 1) || response == (correct + 2)) {
    feedback = 'You were close!';
} else {
    feedback = 'Incorrect.';
}

alert(feedback + ' The expected answer is ' + (correct) + ' .');
*/


alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.")

//random number
let randomNum11 = Math.floor(Math.random() * 10) + 1;
let randomNum12 = Math.floor(Math.random() * 10) + 1;

let randomNum21 = Math.floor(Math.random() * 10) + 1;
let randomNum22 = Math.floor(Math.random() * 10) + 1;

let randomNum31 = Math.floor(Math.random() * 10) + 1;
let randomNum32 = Math.floor(Math.random() * 10) + 1;

let corin = '';

let start1 = Date.now()
let answer1 = prompt('What is ' + randomNum11 + ' + ' + randomNum12 + ' ?');
let end1 = Date.now()
let result1 = (end1 - start1) / 1000
if (answer1 == (randomNum11 + randomNum12)) {
    corin = ('CORRECT');
} else (corin = 'INCORRECT');
alert('You answered ' + answer1 + ' in ' + result1 + ' seconds.' + ' Your answer was ' + corin);


let start2 = Date.now()
let answer2 = prompt('What is ' + randomNum21 + ' + ' + randomNum22 + ' ?');
let end2 = Date.now()
let result2 = (end2 - start2) / 1000
if (answer2 == (randomNum21 + randomNum22)) {
    corin = ('CORRECT');
} else (corin = 'INCORRECT');
alert('You answered ' + answer2 + ' in ' + result2 + ' seconds.' + ' Your answer was ' + corin);

let start3 = Date.now()
let answer3 = prompt('What is ' + randomNum31 + ' + ' + randomNum32 + ' ?');
let end3 = Date.now()
let result3 = (end3 - start3) / 1000
if (answer3 == (randomNum31 + randomNum32)) {
    corin = ('CORRECT');
} else (corin = 'INCORRECT');
alert('You answered ' + answer3 + ' in ' + result3 + ' seconds.' + ' Your answer was ' + corin);