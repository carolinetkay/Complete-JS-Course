'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////


const array1 = ['a', 'b', 'c'];

// for (const [i, ele] of array1.entries()) console.log(i, ele);

// the FOREACH method always needs the 3 things to be in order: Element, index, array
array1.forEach( function (ele, i, arr) {
  console.log(`${i + 1}. ${ele}`);
});

// MAP method creates a new array 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const usdMovements = movements.map(function (mov) {
  return Math.trunc(mov * euroToUsd)
});
// console.log(movements);
// console.log(usdMovements);

const deposits = movements.filter(
  function (mov) {
    return mov > 0;
  }
);

const withdrawals = movements.filter(
  function (mov) {
    return mov < 0;
  }
);
// console.log(deposits);
// console.log(withdrawals);

// REDUCE method; the 2nd number is the starting balance
const balance = movements.reduce( function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: Accumulated amount is ${acc}; Current amount is ${cur}`);
  return acc + cur;
}, 0);
// console.log(balance);

document.querySelector('.balance__value').textContent = `${balance} €`;

// MAXIMUM value
const max = movements.reduce(
  (function (acc, mov) {
    if (acc > mov) {
      return acc;
    } else {
      return mov;
    };
  }), movements[0]);

  console.log(`The maximum balance we have is ${max}`);

  `        
  fsdf
  fdf
  sdf`

  'fdsfsf
  fsdf
  fsdf'