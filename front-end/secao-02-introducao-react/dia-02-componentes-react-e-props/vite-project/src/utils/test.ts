/* eslint-disable prefer-const */
// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(1, 2));

// Função onde os parâmetros devem ser números e se retorno deverá ser número.

let arrayOfStrings: string[]; // armazenará uma lista de strings
let arrayOfNumbers: number[]; // armazenará uma lista de numbers
let arrayOfStringsOrNumbers: (string | number)[]; // armazenará uma lista de strings E/OU numbers
let arrayOfObjects: object[]; // armazenará uma lista de objetos

let person: { name: string, age: number, phone?: string };

arrayOfStrings = ['1', '2', '3', '4', '5', '6'];
arrayOfNumbers = [1, 2, 3, 4, 5, 6];
arrayOfStringsOrNumbers = [1, 2, 3, '4', '5', '6'];
arrayOfObjects = [
  { name: 'Fernando', age: 38, phone: '81999096574' },
  { name: 'Ísis', age: 44 },
];
person = { name: 'Fernando', age: 38 };

console.log(arrayOfStrings);
console.log(arrayOfNumbers);
console.log(arrayOfStringsOrNumbers);
console.log(arrayOfObjects);
console.log(person);
