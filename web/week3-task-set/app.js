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
