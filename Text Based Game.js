const readlineSync = require('readline-sync');
const speler = { naam: "", Health: 100, Items: [] };

function startSpel() {
  console.log("Welkom bij Yassines Tekst Based game");
  speler.naam = readlineSync.question("Wat is je naam? ");
  console.log(`Hallo, ${speler.naam}! Jouw avontuur begint.`);
  explore();
}

function explore() {
  const keuzes = ['links', 'rechts'];
  const index = readlineSync.keyInSelect(keuzes, 'Je bevindt je op een kruispunt. Welke kant wil je opgaan?');

  if (index === -1) { console.log('Je besloot niet te kiezen. Het avontuur eindigt.'); eindigSpel(); return; }

  const keuze = keuzes[index];

  switch (keuze) {
    case "links":
      console.log("Je ontmoet een vriendelijke man. Hij geeft je een health potion.");
      speler.Items.push("Healthpotion");
      speler.Health += 20;
      break;

    case "rechts":
      console.log("Oh nee! Een wild monster verschijnt. Je verliest 20 health in de strijd.");
      speler.Health -= 20;
      break;
  }

  console.log(`Status: Naam - ${speler.naam}, Health - ${speler.Health}, Items - ${speler.Items.join(", ")}`);

  const blijvenVerkennen = readlineSync.keyInYNStrict("Wil je doorgaan met verkennen?");
  blijvenVerkennen ? explore() : eindigSpel();
}

function eindigSpel() {
  console.log("Bedankt voor het spelen van mijn game");
}

startSpel();