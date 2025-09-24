/*
let celsius = [];
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(10));
*/

/*
//Q3
function convertTemp(temp, convertTo) {
    if (
        convertTo == 'c') {
        return (temp - 32) / 1.8
    } else {
        return (temp * 1.8) + 32
    }
}
console.log(convertTemp(10, 'f')); // Expected output: 50
*/

/*
//Q4 getWordLengths

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
function getWordLengths(words) {
    let lengths = [];
    for (let i = 0; i < 5; i++) {
        lengths.push(words[i].length);
    }
    return lengths;
}

console.log(getWordLengths(words));
*/

/*
//Q5 getLongestWord

let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];

function getLongestWord(words) {
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(getLongestWord(words));
*/

/*
//Q6 getOddNumbers
let results = [];
function getOddNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            results.push(numbers[i]);
        }
    }
    return results;
}

console.log(getOddNumbers([1, 2, 3, 4, 5]))
*/

/*
//Q7 filterNumbers
let results = [];

function filterNumbers(numbers, evenOrOdd) {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 2 == 0 && evenOrOdd == 'even') {
            results.push(num);
        } else if (num % 2 !== 0 && evenOrOdd == 'odd') {
            results.push(num);
        }
    }
    return results;
}


console.log(filterNumbers([1, 2, 3, 4, 5], 'even'));
*/

/*
//Q8 Even/Odd Response Time Task

//alert
alert("Welcome to the even/odd response time task.\n\nYou are about to see a series of numbers.\n\nIf the number you see is EVEN, type the letter 'e'.\nIf the number you see is odd, type the letter 'o'.\n\nPlease answer as quickly and accurately as possible.")

function getrandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

let answers = [];
for (let i = 0; i < 5; i++) {
    let number = getrandomNumber(1, 20)
    let start = Date.now()
    let response = prompt('Number:' + number + '\nType the letter "e" for EVEN\nType the letter "o" for ODD')
    let end = Date.now()
    let responseTime = (end - start) / 1000
    let correct = (number % 2 == 0 && response == 'e') || (number % 2 !== 0 && response == 'o')

    answers.push({
        number: number,
        response: response,
        correct: correct,
        responseTime: responseTime
    }
    )
}

console.log(answers)
*/


//Q5 getLongestWord

let words = ['apple', 'specificity', 'cherry', 'pear', 'grape'];

function getLongestWord(words) {
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(getLongestWord(words));
