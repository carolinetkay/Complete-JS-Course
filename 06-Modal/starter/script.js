'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// event listener for showing the modal with overlay
const eventHandler = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', eventHandler);
});

// event listener for closing the modal once shown to users
const closeHandler = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const escapeCloseModal = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeHandler();
  };
};

// close the modal if: 1. click x 2. click on overlay 3. click escape button
btnCloseModal.addEventListener('click', closeHandler);
overlay.addEventListener('click', closeHandler);
document.addEventListener('keydown', escapeCloseModal);
