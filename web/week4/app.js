

// console.log('hello')

/*
let response = 10;
let responsetime = 2.33;
let feedback = 'correct';

console.log('You answered ' + response + ' in ' + responseTime + ' seconds. Your answer was ' + feedback)

console.log(`Your answers ${response} in ${responseTime} seconds. Your answer was ${feedback}.`);
*/

/*
// Part 1. Functions
let num1 = getrandomNumber(1, 10);
let num2 = getrandomNumber(0, 100);

console.log(num1)
console.log(num2)

displayRandomNumber();


function getrandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

function displayRandomNumber() {
    alert(getrandomNumber(1, 10));
}
*/


/*
// Scalar data types hold single values:
let name = 'James'; // String
let age = 15; // Number
let adult = false; // Boolean

//Arrays

//An Array of Numbers
let ages = [45, 23, 28, 35, 35]

//An Array of Strings
//              0        1       2      3
let names = ['Alice', 'Jamal', 'Avi', 'Kyle']
names[1] = 'Bob';
names.push('Sara');
names.unshift('Emily')
console.log(names[4]);
console.log(names);

//an Array can contain other arrays
let numbers = [1, 2, 3, [8, 9, 10]]

//an array of mixed data types (strings, numbers, array)
let mixed = ['a', 'b', 1, 2, [true, 'bar']]
*/


/*
//Part 3 Loops

let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

let namesthatStartWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesthatStartWithA.push(name);
    }
}
console.log(namesthatStartWithA)
*/



//Part 4. Numerical for loops


/*
let results = [];

for (let i = 0; i < 3; i++) {
    //random number
    let randomNum11 = getrandomNumber(1, 10);
    let randomNum12 = getrandomNumber(1, 10);
    let start1 = Date.now()
    let answer1 = prompt(`'What is ${randomNum11} + ${randomNum12}?`);
    let end1 = Date.now()
    let result1 = (end1 - start1) / 1000
    if (answer1 == (randomNum11 + randomNum12)) {
        corin = ('CORRECT');
    } else {
        corin = 'INCORRECT';
    }

    results.push([corin, result1]);

    alert(`You answered ${answer1} in ${result1} seconds. Your answer was ${corin}`);
}

function getrandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

console.log(results);

*/

/*
// Part 5: Objects
//Arrays: Store multiple elements, accessed via numerical indexes
let participantA = ['Alice', 21, true];

let participantB = { name: 'Alice', age: 21, consent: true }
participantB.consent = false;
participantB.startTime = '2:00pm';
delete participantB.age;
console.log(participantB);

if (participantA[2]) {
    //....
}

if (participantB.consent == true) {
    //...
}
*/

function getrandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

let results = [];

for (let i = 0; i < 3; i++) {
    //random number
    let num1 = getrandomNumber(1, 10);
    let num2 = getrandomNumber(1, 10);
    let start = Date.now()
    let response = prompt(`'What is ${num1} + ${num2}?`);
    let end = Date.now()
    let time = (end - start) / 1000
    let answer = num1 + num2
    if (response == answer) {
        feedback = ('CORRECT');
    } else {
        feedback = 'INCORRECT';
    }
    results.push({
        response: response,
        answer: answer,
        feedback: feedback,
        time: time
    });
}

console.log(results);
