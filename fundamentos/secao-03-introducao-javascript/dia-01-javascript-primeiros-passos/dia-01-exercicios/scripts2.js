// let num1 = 92;
// let num2 = 80;

// if (num1 > num2) {
//     console.log('num1 Wins!');
// } else if (num2 > num1) {
//     console.log('num2 Wins!');
// } else {
//     console.log('num1 e num2 possuem o mesmo valor!');
// }

// =======================================

// let diaper;
// let babySize = 4565;

// if (typeof (babySize) !== 'number') {
//     diaper = 'Favor digitar somente números.';
// } else if (babySize > 0 && babySize <= 4) {
//     diaper = 'PP';
// } else if (babySize > 4 && babySize <= 8) {
//     diaper = 'M';
// } else if (babySize > 8 && babySize <= 12) {
//     diaper = 'G';
// } else if (babySize > 12 && babySize <= 16) {
//     diaper = 'GG';
// } else {
//     diaper = 'Tamanho inválido.';
// }

// console.log(diaper);

// ======================================

//CSGO - Cálculo de dinheiro

const round = 15; //Entre 1 e 16
let money = 1200;
const killWeapon = 'Knife'; //'Knife', 'AWP', 'Desert Eagle', 'Molotov', 'MP7'. 
const win = true; //false
const howWin = 'Bomb explode'; //'Eliminando', 'Tempo esgotado', 'Bomb has been planted', 'Bomb has been defused', 'Bomb explode'.
const defuseBomb = true; //false
const bombDetonate = false; //true
let whoWin;

if (round === 1 || round === 16) {
    money = 800;
} else if (win === true && (howWin === 'Eliminando' || howWin === 'Tempo esgotado')) {
    money += 3250;
} else if (win === true && (howWin === 'Bomb explode' || howWin === 'Bomb has been planted')) {
    money += 3550;
} else if (win === true && (howWin === 'Bomb has been defused')) {
    money += 3750;
}

if (round != 1 && round != 16) {
    if (killWeapon === 'AWP') {
        money += 1000;
    } else if (killWeapon === 'Desert Eagle') {
        money += 1200;
    } else if (killWeapon === 'Molotov') {
        money += 1400;
    } else if (killWeapon === 'MP7') {
        money += 800;
    } else if (killWeapon === 'Knife') {
        money += 2500;
    } else {
        console.log('ERROR! Arma não existe.');
    }
}

if (bombDetonate === true && defuseBomb === true) {
    whoWin = 'ERROR! Essa condição não existe!';
} else if (bombDetonate === true) {
    whoWin = 'Terrorist Wins!';
} else if (defuseBomb === true) {
    whoWin = 'Counter Terrorist Wins!';
}

console.log(whoWin + ' - Money: $' + money);