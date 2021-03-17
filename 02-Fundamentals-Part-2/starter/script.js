'use strict';

// Challenge 2
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const dolphinsAverage = calcAverage(44, 23, 71);
// const koalasAverage = calcAverage(65, 54, 49);

// const checkWinner = function (dolphinsAverage, koalasAverage) {
//     if (dolphinsAverage > koalasAverage) {
//         console.log(`Dolphins wins (${dolphinsAverage} vs. ${koalasAverage})`);
//     } else {
//         console.log(`Koalas wins (${koalasAverage} vs. ${dolphinsAverage})`); 
//     };
// }

// checkWinner(dolphinsAverage, koalasAverage);


// Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

let tip = 0;
const calcTip = function (bill) {
    bill >= 50 && bill <=300 ? (tip = 15/100) : (tip = 20/100);
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    tip = calcTip(bills[i]);
    let tipAmount = bills[i] * tip;
    tips.push(tipAmount);
    // console.log(`Tip : ${tipAmount}`);
    
    let totalAmount = bills[i] + tipAmount;
    totals.push(totalAmount);
    // console.log(`Total : ${totalAmount}`);
};

console.log(`Tips: ${tips}`);
console.log(`Total Amounts: ${totals}`); 