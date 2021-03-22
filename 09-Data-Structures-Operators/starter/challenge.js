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

// #1 CONSTRUCTING
const [players1, players2] = game.players;
// console.log(players1, players2);

// #2 CONSTRUCTING
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// #3 DESTRUCTURING
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// #4 DESTRUCTURING
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// #5
// const team1 = game.odds['team1'];
// const draw = game.odds['x'];
// const team2 = game.odds['team2'];
const { odds: { team1, x: draw, team2} } = game;
// console.log(team1, draw, team2);

// #6
const printGoals = function (...players) {
    console.log(players);
    console.log(players.length);
}
// printGoals('Kim', 'Michael', "Jem");

// #7
// if first part of the equation is true, the last part will be returned
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');