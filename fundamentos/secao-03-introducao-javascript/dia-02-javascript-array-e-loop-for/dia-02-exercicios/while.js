let counter = 0;

while(counter != 5) {
    counter += 1;
}

console.log(counter);

// Praticando.. Jogando dados.

let d1 = Math.ceil(Math.random() * 20);
console.log('Resultado D1: ' + d1);
let d2 = Math.ceil(Math.random() * 20);

while (d1 != d2) {
    d2 = Math.ceil(Math.random() * 20);
    console.log('Resultado D2: ', d2);
}

/// Debug exemplo abaixo...

let resultado = '';
let i = 0;
do {
   i += 1;
   resultado += i + ' ';
} while (i < 5);

console.log(resultado);