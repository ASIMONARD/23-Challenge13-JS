const gameEvents = [
    [17, "⚽ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🟨 Yellow card"],
    [69, "🟥 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽ GOAL"],
    [80, "⚽ GOAL"],
    [92, "🟨 Yellow card"],
  ];

console.log("EXERCICE 3")
console.log("----------")
console.log("")

const events = [...new Set(gameEvents.map(event =>event[1]))]
console.table(events)
console.log("")

const updatedGameEvents = gameEvents.filter(event => event[0] !== 64)
updatedGameEvents.forEach(event => {console.log(`${event[0]}' : ${event[1]}`)})
console.log("")

const averageEventTime = 90 / updatedGameEvents.length
console.log(`Un évènement est apparu en moyenne toutes les ${averageEventTime} minutes`)
console.log("")

gameEvents.forEach(event => {const partTime = event <= 45 ? 'PREMIERE MOITIER' : 'DEUXIEME MOITER'
console.log(`[${partTime}] ${event[0]} . ${event[1]}`)})
