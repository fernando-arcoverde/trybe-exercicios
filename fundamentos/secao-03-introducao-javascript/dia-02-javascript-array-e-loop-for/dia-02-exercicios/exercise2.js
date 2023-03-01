let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maxValue = numbers[0];
let numImpares = 0;
let mostrarNumerosImpares;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numImpares += 1;
    }
}

if (numImpares > 0) {
    console.log('Existem ' + numImpares + ' números ímpares dentro do array.');
} else {
    console.log('Nenhum valor ímpar encontrado.');
}