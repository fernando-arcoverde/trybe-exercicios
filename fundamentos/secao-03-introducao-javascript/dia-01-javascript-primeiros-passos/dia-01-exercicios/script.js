// Exercício 1

let myName = 'Carolina';
let birthCity = 'Recife';
const birthYear = 1985;

console.log('Olá, meu nome é ' + myName + ', sou de ' + birthCity + ' e nasci no ano de ' + birthYear + '.');

// Verificando tipos de variáveis.

let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

patientId = "80";

console.log(typeof patientId);

// Exercício 02

const base = 5;
const height = 8;
let area = base * height;
let perimeter = 5 + 5 + 8 + 5;

console.log(area);
console.log(perimeter);

// Exercício 03

let nota = 70;
nota = 100;
nota = 45;

if (nota >= 80) {
    console.log("Parabéns, Você faz parte do grupo de pessoas aprovadas!");
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na lista de espera.");
} else {
    console.log("Infelizmente, você reprovou.");
}