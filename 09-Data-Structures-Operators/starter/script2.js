'use strict';

// All about for-of loops
const menu = ['pizza', 'mushrooms', 'pasta', 'wings'];

for (const item of menu) {
    // console.log(item);
};

// All about Strings 
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// slice uses the beginning and ending point for the string being sliced; ending point is optional
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));


// Boxing is the JS concept of converting a string to an Object where methods can be used on it. Afterwards the returned item is converted back to a String primitive
const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1); 
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat ⛈');
    } else {
        console.log('Lucky dog!');
    }
}

checkMiddleSeat('11C');
