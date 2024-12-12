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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

console.log("EXERCICE 2")
console.log("----------")
console.log("")

console.log("Buts")
for (let i = 0; i < game.scored.length; i++) {
    console.log(`But ${i + 1} : ${game.scored[i]}`)
}
console.log("")

console.log("Moyenne des probabilités")
let sum = 0
let count = 0
for (let proba in game.odds) {
    if (game.odds.hasOwnProperty(proba)) {
        sum += game.odds[proba]
        count++
    }
}
let averageOdds = sum / count
console.log(averageOdds.toFixed(2))
console.log("")

console.table(`Probabilité de victoire pour le ${game.team1} : ${game.odds.team1}`)
console.table(`Probabilité d'égalité' : ${game.odds.x}`)
console.table(`Probabilité de victoire pour le ${game.team2} : ${game.odds.team2}`)
console.log("")

const scorers = {
    Lewandowski: 1,
    Gnarby: 3,
    Lewandowski: 1,
    Hummels: 2
}
