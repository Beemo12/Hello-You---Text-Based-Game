const readlineSync = require('readline-sync');
function startgame() {
const player = {
  naam: ' ',
  health: 100
}

var naam = readlineSync.question ("Wat is je naam adventurer?")
console.log (`Hallo, ${naam}! welkom bij je nieuwe advontuur`)

console.log (`Je naam is ${naam}... je werd ge arresteerd door de politie hier in Orunsbruck en je viel van de bus af.`)

console.log (`Je bent duizelig en moe..`)
console.log (`je voelt een scherpe pijn in je buik`)
console.log ("wil je de scherpe pijn checken?")
const keuze = readlineSync.keyInSelect([ 'Check de pijn', 'negeer het'], 'Wat ga je doen?');

if (keuze==1) {
  console.log ("Je checkt de scherpe pijn niet en je loopt door..")
  console.log ("na een tijdje lopen voel je je duizelig, je checkt je wond..")
  console.log ("je checkt je wond en je ziet dat toen je van de bus viel je een grootte wond hebt gekregen, je ziet dit en je gaat dood.")
  console.log ("SLECHTE EINDE")
  startgame()
}
  else { 
    console.log ("je checkt de wond en je ziet een grootte wond vanwege de val van de bus, goed dat je het zo vroeg hebt gezien anders zou je zeker dood gaan.")
    console.log ("je scheurt je shirt en doet het om de wond heen om de bloeding te stoppen.")
    // hier ga ik 20 health eraf halen wanneer ik een health systeem heb gemaakt.
}



}

startgame()