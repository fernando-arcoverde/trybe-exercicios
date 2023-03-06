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

let pecaXadrez = 'rei';

switch (pecaXadrez) {
    case 'rei':
        console.log(pecaXadrez + ': Uma casa apenas para qualquer direção.');
        break;
    case 'rainha':
        console.log(pecaXadrez + ': Se mova em qualquer direção quantas casas quiser.');
        break;
    case 'bispo':
        console.log(pecaXadrez + ': Movimentos diagonais.');
        break;
    case 'cavalo':
        console.log(pecaXadrez + ': Movimentos em "L" e pode pular sobre outras peças.');
        break;
    case 'torre':
        console.log(pecaXadrez + ': Movimentos horizontais e verticais.');
        break;
    case 'peão':
        console.log(pecaXadrez + ': No primeiro movimento pode movimentar duas casas para frente, após o primeiro movimento, apenas uma casa.');
        break;

    default:
        console.log('Peça não encontrada.');
}