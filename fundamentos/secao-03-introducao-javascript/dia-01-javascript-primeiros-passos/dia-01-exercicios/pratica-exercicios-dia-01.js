// let a = 70;
// let b = 43;
// let c = 32

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log(a + ' maior ' + b);
// } else {
//     console.log(b + ' maior ' + a);
// }

// if (a > b && a > c) {
//     console.log(a + ' é maior que ' + b + ' e ' + c + '.');
// } else if (b > a && b > c) {
//     console.log(b + ' é maior que ' + a + ' e ' + c + '.');
// } else {
//     console.log(c + ' é maior que ' + a + ' e ' + b + '.');
// }

// let valor = 9;
// if (valor > 0) {
//   console.log('positivo');
// } else if (valor < 0) {
//   console.log('negativo');
// } else {
//   console.log('zero');
// }

// let angulaA = 30;
// let anguloB = 120;
// let anguloC = 30;
// let somaAngulos = angulaA + anguloB + anguloC;

// if (angulaA > 0 && anguloB > 0 && anguloC > 0) {
//     if (somaAngulos === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log('Ângulo Inválido!');
// }

// ====================================

// let pecaXadrez = 'rei';

// switch (pecaXadrez.toLowerCase()) {
//     case 'rei':
//         console.log(pecaXadrez + ': Uma casa apenas para qualquer direção.');
//         break;
//     case 'rainha':
//         console.log(pecaXadrez + ': Se mova em qualquer direção quantas casas quiser.');
//         break;
//     case 'bispo':
//         console.log(pecaXadrez + ': Movimentos diagonais.');
//         break;
//     case 'cavalo':
//         console.log(pecaXadrez + ': Movimentos em "L" e pode pular sobre outras peças.');
//         break;
//     case 'torre':
//         console.log(pecaXadrez + ': Movimentos horizontais e verticais.');
//         break;
//     case 'peão':
//         console.log(pecaXadrez + ': No primeiro movimento pode movimentar duas casas para frente, após o primeiro movimento, apenas uma casa.');
//         break;

//     default:
//         console.log('Peça não encontrada.');
// }

// ==================================

// let nota = 92; // 0 a 100

// if (nota < 0 || nota > 100) {
//     console.log('ERROR! Nota inválida. Insira valores de 0 à 100.');
// } else if (nota >= 90) {
//     console.log('A');
// } else if (nota >= 80) {
//     console.log('B');
// } else if (nota >= 70) {
//     console.log('C');
// } else if (nota >= 60) {
//     console.log('D');
// } else if (nota >= 50) {
//     console.log('E');
// } else {
//     console.log('F');
// }

// ====================================

// let num1 = 5;
// let num2 = 16;
// let num3 = 9;

// let numPar = false;

// if ((num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0)) {
//     numPar = true;
// };

// console.log(numPar);

// ====================================

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// let custoProduto = 1;
// let saleValue = 3;

// if (custoProduto >= 0 && saleValue >= 0) {
//     let totalCostOfProduct = custoProduto * 1.2;
//     let totalProfit = (saleValue - totalCostOfProduct) * 1000;
//     console.log(totalProfit);
// } else {
//     console.log('Error, os valores não podem ser negativos!');
// }

// ====================================

let aliquotINSS;
let aliquotIR;

let grossSalary = 40000;

if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
} else if (grossSalary > 5189.82) {
    aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
    aliquotIR = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    aliquotIR = baseSalary * 0.075 - 142.80;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    aliquotIR = baseSalary * 0.15 - 354.80; 
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    aliquotIR = baseSalary * 0.225 - 636.13;
} else {
    aliquotIR = baseSalary * 0.275 - 869.36;
}

let liquidSalary = baseSalary - aliquotIR;

console.log(`Salário Líquido é de: R$ ${liquidSalary}`);

