/*
let celsius = [];
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(10));
*/


function convertTemp(temp, convertTo) {
    if (
        convertTo == 'c') {
        return (temp - 32) / 1.8
    } else {
        return (temp * 1.8) + 32
    }
}
console.log(convertTemp(10, 'f')); // Expected output: 50





