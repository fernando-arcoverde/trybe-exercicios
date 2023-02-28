let num1 = 8;
let num2 = '8';

// if (num1 > num2) {
//   console.log('num1 wins!');
// } else if (num1 === num2) {
//   console.log('Empate!');
// } else {
//   console.log('num2 wins!');
// }

// console.log(1 + '1');


// ======================================

let diaper;
let babySize = 89485;

if(typeof(babySize) !== 'number'){
  diaper = 'Favor digitar somente números';
} else if(babySize <= 4){
  diaper = 'RN';
} else if(babySize > 4 && babySize <= 6){
  diaper = 'RN+';
} else if(babySize > 6 && babySize <= 8){
  diaper = 'P';
} else if(babySize > 8 && babySize <= 10){
  diaper = 'M';
} else if(babySize > 10 && babySize <= 13){
  diaper = 'G';
} else if(babySize > 13 && babySize <= 15){
  diaper = 'XG';
} else if(babySize > 15 && babySize <= 20){
  diaper = 'XXG';
} else {
  diaper = 'Coloque um número de 0 a 20';
}

console.log(diaper);
console.log(typeof(babySize));
