'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1 
const players1 = [...game.players[0]]
console.log(players1);

const players2 = [...game.players[1]]
console.log(players2);

// #2
const gk = players1[0];
// const fieldPlayers = [gk, ...otherPlayers]
// console.log(otherPlayers);

// #3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// #4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// #5
const team1 = game.odds['team1'];
const draw = game.odds['x'];
const team2 = game.odds['team2'];

// #6
const printGoals = function (...players) {
    console.log(`${players}`);
    console.log(...players.length);
}
// printGoals();

// #7
// console.log();
const teamOdds = [team1, draw, team2];
console.log(teamOdds.sort()[0]);