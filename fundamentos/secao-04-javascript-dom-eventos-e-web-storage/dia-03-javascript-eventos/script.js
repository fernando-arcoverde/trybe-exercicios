window.onload = () => {
  // Captura dos elementos
  const startBtn = document.getElementById('start-race-btn');
  const resetBtn = document.getElementById('reset-race-btn');
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const audioWinner = document.getElementById('audioWinner');
  
  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if (player1Win) {
      audioWinner.play();
      alert('PLAYER 1 GANHOU!');
      resetCars();
    }

    if (player2Win) {
      audioWinner.play();
      alert('PLAYER 2 GANHOU!');
      resetCars();
    }

  });

  const resetCars = () => {
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
  }

  resetBtn.addEventListener('click', resetCars);

  // SELECIONAR PLAYER
  const cars = document.getElementsByClassName('car');
  const alternatives = document.getElementsByClassName('playersImages');

  for (let index = 0; index < cars.length; index += 1) {
    cars[index].addEventListener('click', (event) => {
      const playerSelect = document.querySelector('.selected');
      if (playerSelect) {
        playerSelect.classList.remove('selected');
      }
      event.target.classList.add('selected');
    })
  }

  // SELECIONAR PERSONAGEM

  for (let index = 0; index < alternatives.length; index += 1) {
    alternatives[index].addEventListener('click', (event) => {
      const playerSelect = document.querySelector('.selected');
      if (playerSelect) {
        // console.log(event.target);
        playerSelect.style.backgroundImage = `url(${event.target.src})`;
        playerSelect.classList.remove('selected');
      }
    })
  }

}
