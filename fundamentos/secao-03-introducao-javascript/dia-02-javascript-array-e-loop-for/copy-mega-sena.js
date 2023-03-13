let lotteryNumbers = [];
let firstGame = [45, 60, 54, 23, 2, 15];

for (let index = 0; index < 6; index += 1) {
    lotteryNumbers.push(Math.ceil(Math.random() * 60));
}

// console.log(lotteryNumbers);

// Comparação do sorteio com o jogo do usuário.

let numberOfHits = 0;
let hits = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotteryNumbers[indexLottery] === firstGame[indexGame]) {
            numberOfHits += 1;
            hits.push(lotteryNumbers[indexLottery]);
        }
    }
}

// Mostrando resultandos

console.log('Números sorteados: ' + lotteryNumbers);
console.log('Jogo: ' + firstGame);
console.log('Acertos: ' + numberOfHits);
console.log('Números acertados: ' + hits);
