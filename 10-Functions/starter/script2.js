'use strict';

const oneWord = function (str) {
    return str.replace(/ /g , '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// console.log(upperFirstWord('handy man'));

// Higher order function
const transformer = function (str, fn) {
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

// upperFirstWord and oneWord are callback functions because JS calls them for us; we do not call them ourselves
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);