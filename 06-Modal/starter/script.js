'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// event listener for showing the modal with overlay
const eventHandler = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

btnsOpenModal.forEach((btn) => {
    btn.addEventListener('click', eventHandler)
})

// event listener for closing the modal once shown to users
const closeHandler = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// both the x button and the overlay will listen and do the same thing
btnCloseModal.addEventListener('click', closeHandler);
overlay.addEventListener('click', closeHandler);

