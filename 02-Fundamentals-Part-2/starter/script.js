'use strict';

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const checkWinner = function (dolphinsAverage, koalasAverage) {
    if (dolphinsAverage > koalasAverage) {
        console.log(`Dolphins wins (${dolphinsAverage} vs. ${koalasAverage})`);
    } else {
        console.log(`Koalas wins (${koalasAverage} vs. ${dolphinsAverage})`); 
    };
}

checkWinner(dolphinsAverage, koalasAverage);


