   'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [7, 8, 9]
// const arr2 = [1, 2, 3]

// const superArr = [...arr, ...arr2]
// console.log([superArr]);
// console.log(...superArr); 


// SPREADS ... are on the Right
// SPREADS unpack things in a list; used where you would write Values separated by a comma
// const ingredients = [
//   prompt("let's make lasagne~ Ingredient 1 please?"),d
//   prompt("let's make lasagne~ Ingredient 2 please?"),
//   prompt("let's make lasagne~ Ingredient 3 please?")
// ]

// console.log(ingredients);

const orderFood = function (ing1, ing2, ing3) {
  // console.log(...ingredients);
  console.log(`Here is your lasagne with ${ing1}, ${ing2} and ${ing3}!`);
}
// orderFood(...ingredients);

// RESTs ... are on the Left
// RESTs aggregate things from a list used where you would write Variable names separated by a comma
const [f1, f2, ...others] = ['pizza', 'pasta', 'risotto', 'mushrooms', 'focaccia'];

console.log(f1, f2, others);





