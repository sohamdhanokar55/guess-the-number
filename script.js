'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 12;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 2;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number😭';
    message('No Numeber😭');
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!!';
    message('Correct Number!!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High!' : 'Too Low!';
      message(guess > number ? 'Too High!' : 'Too Low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost!';
      message('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start Guessing...';
  message('Start Guessing...');
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
});
