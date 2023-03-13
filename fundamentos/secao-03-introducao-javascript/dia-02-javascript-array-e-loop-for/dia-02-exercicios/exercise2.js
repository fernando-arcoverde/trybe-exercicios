// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// ===================================

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = sum / numbers.length;

for(let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

let maiorValor = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
  }
}

console.log(maiorValor);

let oddNumber = 0;

for(let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    oddNumber += 1;
  }
}

if (oddNumber === 0) {
  console.log('Nenhum valor ímpar encontrado!');
} else {
  console.log(oddNumber);
}

let menorValor = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

// console.log(menorValor);

let numbers2 = [];

for(let index = 1; index <= 25; index += 1) {
  numbers2.push(index);
}

console.log(numbers2);

for (let index = 0; index < numbers2.length; index += 1) {
  console.log(numbers2[index] / 2);
};