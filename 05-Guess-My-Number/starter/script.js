'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

const eventHandler = function () {
  const guessValue = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  message.textContent = 'Correct Number! 🙊';

  if (!guessValue) {
    message.textContent = 'Error! No number 🙈';
  } else if (guessValue === secretNumber) {
    message.textContent = 'Congratulations! 🐳';
  } else if (guessValue > secretNumber) {
    message.textContent = 'Too high!';
  } else if (guessValue < secretNumber) {
    message.textContent = 'Too low!';
  }
};

document.querySelector('.check').addEventListener('click', eventHandler);
