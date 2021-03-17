'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
const scoreValue = document.querySelector('.score');

const htmlBody = document.querySelector('body');
const numberBox = document.querySelector('.number');

const eventHandler = function () {
  const guessValue = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  message.textContent = 'Correct Number! 🙊';

  if (score > 1) {
    if (!guessValue) {
      message.textContent = 'Error! No number 🙈';
    } else if (guessValue === secretNumber) {
      message.textContent = 'Congratulations! 🐳';
      htmlBody.style.backgroundColor = 'green';
      numberBox.style.width = '30rem';
      numberBox.textContent = secretNumber;
    } else if (guessValue > secretNumber) {
      message.textContent = 'Too high!';
      score--;
      scoreValue.textContent = score;
    } else if (guessValue < secretNumber) {
      message.textContent = 'Too low!';
      score--;
      scoreValue.textContent = score;
    }
  } else {
    message.textContent = 'Game Over! 🌊';
  }
};

document.querySelector('.check').addEventListener('click', eventHandler);
