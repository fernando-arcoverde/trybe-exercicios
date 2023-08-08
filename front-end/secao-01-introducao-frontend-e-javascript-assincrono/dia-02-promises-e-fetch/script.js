const firstNumber = 9;
const secondNumber = 10;
let thirdNumber = firstNumber + secondNumber;

console.log(thirdNumber);

setTimeout(() => console.log(thirdNumber), 3000);

thirdNumber = firstNumber - secondNumber;

console.log(thirdNumber);