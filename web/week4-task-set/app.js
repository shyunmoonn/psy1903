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

let getWordLengths = [];

let getWordLengths = [];
for (let word of words) [
    str.length
]

function getWordLengths(words) {
    for ()

*/
let words = ['apple', 'banana', 'cherry', 'pear', 'grape'];
function getWordLengths(words) {
    let lengths = [];
    for (let i = 0; i < 5; i++) {
        lengths.push(words[i].length);
    }
    return lengths;
}

console.log(getWordLengths(words));