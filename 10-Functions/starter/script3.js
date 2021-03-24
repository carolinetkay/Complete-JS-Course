'use strict';

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Caro');

// greet('Hello')('Caro');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: `${name}`});
    },
}

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

lufthansa.book('122', 'Caro');
lufthansa.book('123', 'Puro');

// 1. CALL Method - to circumvent 'this' being undefined as the book function does not have an Object attachment anymore
const book = lufthansa.book;
book.call(eurowings, '23', 'Sarah Tan');
book.call(eurowings, '25', 'Patrica Lee');
// console.log(eurowings);

// 2. APPLY Method - less useful than call
const flightData = ['583', 'George Cooper'];
// these 2 below are the same
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);
// console.log(eurowings);

// 3. BIND method
// Creates new functions for each airline; bind once and call forever
const bookEW = book.bind(eurowings);
// this is called partial application
const bookEW23 = book.bind(eurowings, '23');
bookEW('21', 'Steven Pharrell');
bookEW23('Steven Lim');

// With Event Listeners
// add some methods to the object
lufthansa.planes = 300;
console.log(lufthansa.planes);
lufthansa.buyPlane = function () {
    this.planes++;
    console.log(this.planes);
};

// this keyword will refer to the button element we are query selecting
// so we need to find lufthansa.buyPlane to the lufthansa object first
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = function (rate, value) {
    return value + (value * rate);
}
// console.log(addTax(0.1, 200));

// rmb the first argument is always going to be 'this', which we don't need here
const addVAT = addTax.bind(null, 0.25);
console.log(addVAT(200));