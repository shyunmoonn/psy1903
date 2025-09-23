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