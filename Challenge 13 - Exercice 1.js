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

//Créating tables players for each team
const players1 = game.players[0]
const players2 = game.players[1]

//Creating table of players for Bayern de Munich
const gk1 = players1[0]
const fieldPlayers1 = players1.slice(1)

//Creating table of players for Borrussia Dortmund
const gk2 = players2[1]
const fieldPlayers2 = players2.slice(1)

//Creating tables for all players
const allPlayers = game.players[0].concat(game.players[1])
let count = 0
for (let i = 0; i < allPlayers.length; i++) {
  if (typeof allPlayers[i] === 'string') {
    count++
  }
}

// creating tables for players final
const players1Final = game.players[0]
players1Final.push('Thiago', 'Coutinho', 'Perisic')

let team1 = game.odds.team1
let draw = game.odds.x
let team2 = game.odds.team2

function printGoals(player, goal, allPlayers) {
  if (allPlayers && allPlayers.includes(player)) {
  console.log(player + " a marqué " + goal + " buts")
  } else {
    console.log('Joueur inconnu')
  }
}

console.log("EXERCICE 1")
console.log("----------")
console.log("")

console.log("Bayern de Munich")
console.log(`Gardien : ${gk1}`)
console.log(`Autres joueurs : ${fieldPlayers1}`)
console.log("")

console.log('Borrussia Dortmund')
console.log(`Gardien : ${gk2}`)
console.log(`Autres joueurs : ${fieldPlayers2}`)
console.log("")

console.log("Tous les joueurs du match : (", count, "joueurs)")
console.log(allPlayers)
console.log("")

console.log("L'équipe entière du Beyern de Munich, inclus les emplaçants :")
console.log(players1Final)
console.log("")

printGoals('Hazard',127,allPlayers)
printGoals('moi',127,allPlayers)

if (team1 < team2) {
  console.log(`le ${game.team1}, avec une probabilité de ${team1} contre ${team2} pour le ${game.team2} a plus de chance de gagner`)
} else {
  console.log(`le ${game.team2}, avec une probabilité de ${team2} contre ${team1} pour le ${game.team1} a plus de chance de gagner`) 
}