'use strict';

const flight = 'LH234';
const caro = {
    name: 'Caroline Tan',
    passport: 'A52495242'
};

const checkIn = function (flightNum, passenger) {
    passenger.name = `Ms. ${passenger.name}`;

    if (passenger.passport === 'A52495242' ) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    };
}

checkIn(flight, caro);
// console.log(flight);
// console.log(caro);

const {name, passport} = caro;
console.log(name);
console.log(passport);