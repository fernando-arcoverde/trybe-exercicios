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

// Utilizando Operador && - AND

let comida = 'pão na chapa';
let bebida = 'café';

bebida = 'Suco de Laranja';

if (bebida === 'café' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeção :)');
} else {
    console.log('Acho que houve um engano com o meu pedido.');
}

// Exercício 04

let currentHour = 17;
let messagge;

if (currentHour === 22) {
    messagge = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    messagge = 'Rango da noite, vamos jantar.';
} else if (currentHour >= 14 && currentHour < 18) {
    messagge = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    messagge = 'Hora do almoço.';
} else if (currentHour >= 4 && currentHour < 11) {
    messagge = 'Hmmm, cheiro de café recém-passado';
}

console.log(messagge);