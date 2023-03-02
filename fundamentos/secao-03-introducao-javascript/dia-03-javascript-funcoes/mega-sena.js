//Sorteio dos números
let lotteryNumbers = [];
let firstGame = [];

function generateLotteryNumbers (quantity, maxNumber, array) {
  for (let index = 0; index < quantity; index += 1) {
    let randomNumber = Math.ceil(Math.random() * maxNumber);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    } else {
      index -= 1;
    }
  }
}

generateLotteryNumbers(6, 60, lotteryNumbers);
generateLotteryNumbers(6, 60, firstGame);

// Comparação do sorteio com o meu jogo
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

// Mostra os resultados
console.log('Números sorteados:', lotteryNumbers);
console.log('Jogo:', firstGame);
console.log('Quantidade de acertos:', numberOfHits);
console.log('Números acertados:', hits);