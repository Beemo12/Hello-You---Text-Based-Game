const readlineSync = require('readline-sync');
var naam;

function startgame() {
const player = {
  naam: ' ',
}


naam = readlineSync.question ("Wat is je naam adventurer?")
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
  console.log (`######################################`)
  console.log ("DOMME EINDE")
  console.log (`######################################`)
  startgame()
}
  else { 
    console.log ("je checkt de wond en je ziet een grootte wond vanwege de val van de bus, goed dat je het zo vroeg hebt gezien anders zou je zeker dood gaan.")
    console.log ("je scheurt je shirt en doet het om de wond heen om de bloeding te stoppen.")
    console.log ("je hebt 20 health verloren")
}
console.log ("Je bent moe en het is belangrijk dat je gaat rusten. Er is een stad verder op maar rechts van je dichtbij is er een klein achtergelaten hutje.")
const stad = readlineSync.keyInSelect([ 'Naar stad lopen en kijken of je daar kan rusten', 'Rusten in de achtergelaten klein hutje'], 'Wat ga je doen?');

if (stad==0) {
  console.log("Je blijft lopen naar de stad en onderweg zie je een wolf, wil je weg rennen of naar de wolf toe gaan?")
  const wolf = readlineSync.keyInSelect([ 'loop naar wolf', 'ren weg'], 'Wat ga je doen?');

  if (wolf==0) {
    console.log ("Je loop naar de wolf,")
    console.log ("Je probeert de Wolf aan te raken,")
    console.log ("Net wanneer je hem probeert te aaien bijt hij jou en komen er nog meer wolven van achter de bomen,")
    console.log ("Ze bijten je allemaal en je gaat dood.")
    console.log (`######################################`)
    console.log ("WOLF EINDE")
    console.log (`######################################`)
    startgame()
  }

  else {
    console.log ("Je rent zo hard als je kan weg van de wolf,")
    console.log ("Je struikeld over een tak,")
    console.log ("Je struikeld en je hoofd raakt een steen.")
    console.log (`######################################`)
    console.log ("TAK EINDE")
    console.log (`######################################`)
    startgame()
  }
}

else {
  console.log ("Je ligt in de hutje en wacht tot het donker is..")
  console.log ("Je hebt 20 Health terug gekregen")
  console.log ("Je word wakker van een rat die de crackers in je zak probeert te eten,")
  console.log (`${naam}: Nu heb ik ook geen eten meer.. Jammer.`)
  console.log ("je staat op om naar de stad te gaan lopen.")
  console.log ("Je loopt nu naar de stad")
  console.log ("Onder weg heb je veel honger")

  console.log ("################################################")
  console.log ("Je bent nu in de kleine stad genaamd: Valentine ")
  console.log ("In valentine heb je veel verschilende winkels,");
  console.log ("Je hebt links van je een hotel,")
  console.log ("Rechts van je heb je een groot huis")
  console.log ("Recht door is een politie bureau")

  

IndeStadKeuze();
}
}

function IndeStadKeuze()
{

const indestad = readlineSync.keyInSelect([ 'Naar hotel', 'Naar grote huis', 'Naar politie bureau.'], 'Wat ga je doen?');

if (indestad==0) {
  hotel();
}

if (indestad==1) {
naarhethuis();
}

if (indestad==2) {
politiebureau();
}

}

function hotel() {
  console.log ("Je loopt naar de Hotel en gaat naar binnen")
  console.log ("Je ziet een man en haar vrouw aan het schreeuwen aan de manager van de hotel")
  const manager = readlineSync.keyInSelect([ 'Praat met man en haar vrouw', 'Praat met manager'], '');
  if (manager==0) {
    console.log (`${naam}: Hallo meneer bent u de manager?`)
    console.log (`Manager: Ja even geduld..`)
    console.log (`man: IK GA HIER NOOIT MEER TERUG KOMEN`)
    console.log (`Manaager: Oke.`)
  }
  else {
    console.log ("Je praat met de man en haar vrouw.")
    console.log ("man: Als ik jou was zal ik hier nooit komen!")
    console.log ("vrouw: Ja dit is een hele slechte plek!")
    console.log ("De man en de vrouw stormen weg...")

  }
  console.log ("Dus waarom kom je hier?")
  const waaromkomjehier = readlineSync.keyInSelect([ 'Ik ben gevallen van een politie bus wat moet ik doen?', 'laat maar (ga weg)', ]);
  if (waaromkomjehier==1) {
    console.log (`${naam}: laat maar.`)
    IndeStadKeuze();
  }
  if (waaromkomjehier==0) {
    console.log (`${naam}: Ik was gevallen van een politie bus en ik ben nu gewond, ik weet niet wat ik moet doen ik ben gewoon naar dit stad toe gegaan.`)
    console.log (`Manager: Ik weet niet of ik je kan helpen, ik weet een ding en dat is dat je zeker niet naar de politie bureau moet gaan`)
    console.log (`${naam}: kom op man je moet me helpen!`)
    console.log (`Manager: oke, oke, ik weet mischien wel iets maar je moet me vertrouwen.`)
    const vertrouwen = readlineSync.keyInSelect([ 'vertrouw hem',])
    if (vertrouwen==0) {
      console.log (`${naam}: weet je wat, ik vertrouw jou`)
      console.log (`Manager: ok kom mee..`)
      console.log (`...2 uur later...`)
      console.log (`Manager: Oke hier zijn we dan.`)
      console.log (`${naam}: waar zijn we precies?`)
      console.log (`Manager: Dat maakt nu niet meer uit, als het 7 uur is stap je in de achterbak van deze auto. Snap je het?`)
      console.log (`${naam}: ja ik snap het.`)
      console.log (`Manager: Oke, veel success.`)
      const tijdchecken = readlineSync.keyInSelect([ 'check tijd', ])
      if (tijdchecken==0){
        console.log ("je checkt de tijd op je horloge...")
        console.log("         .--.-----.--. ")
        console.log("         |--|-----|--| ")
        console.log("         |--|     |--| ")
        console.log("         |  |-----|  | ")
        console.log("       __|--|     |--|__ ")
        console.log("      /  |  |-----|  |  \ ")
        console.log("     /   \__|-----|__/   \ ")
        console.log("    /   ______---______   \/\ ")
        console.log("   /   /               \   \/ ")
        console.log("  {   /   __     _   _  \   } ")
        console.log(" |  {      / . | | | |  }  |-, ")
        console.log(" |  |     /  . |_| |_|  |  | | ")
        console.log(" |  {                   }  |-' ")
        console.log("  {   \                 /   } ")
        console.log("   \   `------___------'   /\ ")
        console.log("    \     __|-----|__     /\/ ")
        console.log("     \   /  |-----|  \   / ")
        console.log("      \  |--|     |--|  / ")
        console.log("      --|  |-----|  |-- ")
        console.log("         |--|     |--| ")
        console.log("         |--|-----|--| ")
        console.log("         `--'-----`--' ")
        const stapin = readlineSync.keyInSelect([ 'stap in de auto', ])
        if (stapin==0){
          console.log ("je stapt in de achterbak van de auto")
          console.log ("je doet de deur achter je dicht.")
          console.log ("je wacht...")
          console.log ("...10 minuten later...")
          console.log ("je hoort de auto deur open gaan..")
          console.log ("de auto start..")
          console.log ("###############################")
          console.log ("...6 uur later...")
          console.log ("de achter bak gaat open..")
          console.log ("een man groet je;")
          console.log (`De Man: Hallo ben jij ${naam}?`)
          const deman = readlineSync.keyInSelect(['Ja dat ben ik', 'ja en wie ben jij?', ]) 
          if (deman==0){
            console.log (`${naam}: Ja dat ben ik.`)
            console.log ("De man: oke goed de manager had het over jou.")
            console.log (`${naam}: wie ben jij?`)
            console.log ("De man: dat maakt niet uit. Ik moest je van de maanger van A naar B brengen, je bent nu in B")
          }
          else {
            console.log (`${naam}: ja dat ben ik maar wie ben jij?`)
            console.log ("De man: dat maakt niet uit. Ik moest je van de maanger van A naar B brengen, je bent nu in B")
          }
          console.log (`${naam}: oke dus wat is B dan?`)
          console.log ("De man: Je bent nu in Frankrijk.")
          console.log ("De man: Om precies te zijn in Calais")
          console.log (`${naam}: Ik ben hier nog nooit geweest..`)
          console.log ("De man: Ga naar de coordinaten in dit briefje, en vrouw woont daar, zeg dat je hier bent vanwege de manager.")
          console.log (`${naam}: Wat ga ik daar doen?`)
          console.log ("De man: Je gaat door voor de vrouw daar werken, en in ruil daarvoor krijg je een dak op je hoofd en eten.")
          console.log (`${naam}: Oke dankjewel.`)
          console.log (`######################################`)
          console.log (`GOEIE EINDE`)
          console.log (`######################################`)
          startgame()

          }
        }
      }
    }
  } 

function politiebureau() {
  console.log ("Je loopt naar de politie bureau..")
  console.log ("Je zegt tegen je zelf:")
  console.log (`${naam}: Waarom ben ik zo iets doms aan het doen..`)
  const politiebureau = readlineSync.keyInSelect(['geef je zelf aan', 'loop weg', ], 'Wat ga je doen?');
  if (politiebureau==1) {
    console.log ("je loopt weg.")
    IndeStadKeuze();
  }
  if (politiebureau==0) {
    console.log ("Je loopt naar binnen..")
    console.log (`######################################`)
    console.log ("POLITIE BUREAU")
    console.log (`######################################`)
    console.log ("De politie agent bij de balie groet je...")
    console.log ("Politie agent: Hallo hoe kan ik je helpen?")
    const politieagent = readlineSync.keyInSelect(['sorry ik ben vergeten waarom ik hier naar toe ben gekomen (ga terug)', 'Ik zou me zelf graaag aan geven', ], 'Wat ga je doen?');
    if (politieagent==0) {
      console.log (`${naam}: Sorry ik ben vergeten waarom ik hier naar toe ben gekomen.`)
      console.log (`Politie agent: oke geen probleem!`)
      console.log (`Je loopt weer terug.`)
      IndeStadKeuze();
    }
    if (politieagent==1) {
      console.log (`${naam}: Hallo, ik zou me zelf graag aan geven. `)
      console.log (`Politie agent: ja voor wat dan?`)
      console.log (`${naam}: Ik weet dat dus niet, ik was van de politie bus gevallen en ik had zo een hoofdpijn dat ik veel was vergeten. `)
      console.log (`Politie agent: nou weet je nog wel je naam dan?`)
      console.log (`${naam}: uhh ja het is ${naam} `)
      console.log (`Politie agent: Oke ik check wel de systeem voor wat je hebt gedaan..`)
      console.log (`..De politie agent checked de systeem..`)
      console.log (`Politie agent belt andere agenten..`)
      console.log (`${naam}: uhh mevrouw wat is er aan de hand?`)
      console.log (`Politie agent: dat maakt niks uit BLIJF HIER.`)
      const escape = readlineSync.keyInSelect(['Ren weg', 'blijf in de politie bureau', ], 'Wat ga je doen?');
      if (escape==0) {
       console.log ("Je rent zo snel mogelijk de uitgang uit en je rent de hotel in...")
       hotel();
      }
      if (escape==1) {
        console.log (`${naam}: Oke ik blijf wel hier zitten.. `)
        console.log (`Ineens stormen er 6 bewapende soldaten naar binnen.`)
        console.log (`Soldaat 3: STAAN BLIJFEN NIET BEWEGEN!`)
        console.log (`${naam}: Wat heb ik gedaan? `)
        console.log (`Soldaat 5: HANDEN OMHOOG`)
        console.log (`${naam}: Maar wat heb ik gedaan?`)
        const handenomhoog = readlineSync.keyInSelect(['handen omhoog', 'doe je handen in je zakken', ], 'Wat ga je doen?');
        if (handenomhoog==1) {
          console.log ("Je doet je handen in je zakken..")
          console.log ("De moment dat je net je handen in je zakken doet begonnen de soldaten te schieten.")
          console.log ("Je bent dood.")
          console.log (`######################################`)
          console.log (`DOOD GEMAAKT EINDE`)
          console.log (`######################################`)
          startgame()
        }
        if (handenomhoog==0) {
          console.log ("Soldaat 4 doet handboeien om je heen..")
          console.log ("Ze zetten je in een zwate auto..")
          console.log ("ze doen een kleed om je ogen heen zodat je niks ziet..")
          console.log ("ineens doen ze de kleed van je ogen af en ben je in een huis")
          console.log (`Generaal: Hallo ${naam}..`)
          console.log (`Generaal: Weet je waar je bent?`)
          console.log (`${naam}: hoe hoor ik dat te weten als je een kleed om me ogen deed?`)
          console.log (`Generaal: Goed, dat was de punt.`)
          console.log (`Generaal: De reden dat je hier bent is omdat de politie agent bij de bureau in Valentine had aangegeven dat iemand met de naam: ${naam} zich wou aan geven.`)
          console.log (`Generaal: Maar dat gaat niet zo makkelijk..`)
          const vraag1 = readlineSync.keyInSelect(['Wat ga je met me doen?', 'Wat heb ik gedaan?', ], 'Wat ga je vragen?');
          if (vraag1==0) {
            console.log (`${naam}: Wat ga je met mij doen?`)
            console.log (`Generaal: voor nu, niks.`)
          }
          if (vraag1==1) {
            console.log (`${naam}: Kan je tenminste vertellen wat ik heb gedaan?`)
            console.log (`Generaal: Ga je nu doen alsof je niet weet wat je gedaan hebt? laat me niet lachen.`)
          }
          console.log ("Generaal: De politie agent zei dat je echt bent vergeten van alles dat er is gebeurt na je arrestatie..")
          console.log (`${naam}: Ja dat is wat ik probeer te vragen.`)
          console.log (`General: Oke goed, je werd 2 dagen voordat je van de bus was gevallen ge arresteerd voor de moord van 3 mensen in een grote huis in het stad valentine,
          de zelfde stad waar je gearresteerd werd.`)
          console.log (`${naam}: dus dat is waarom niemand open deed voor mij..`)
          console.log (`Generaal: Ja, omdat je daar 3 mensen had vermoord.`)
          console.log (`${naam}: Wat ga je nu met mij doen?`)
          console.log (`Generaal: we zijn aan het wachten op transport naar de gevangenis.`)
          console.log (`...3 uur later...`)
          console.log (`Generaal: DOE DE KLEED OM ZIJN OGEN EN GOOI HEM IN DE BUS`)
          console.log (`..Je word ge transport naar de gevangenis..`)
          console.log (`#########################################`)
          console.log (`Gevangenis`)
          console.log (`#########################################`)
          console.log (`Gevangenis agent: Doe al je spullen in deze bak.`)
          const gevangenis = readlineSync.keyInSelect(['doe spullen in bak', ], 'Wat ga je doen?');
          if (gevangenis==0) {
            console.log ("Je doet al je spullen in de bak.")
          }
          console.log ("doe je kleren uit en doe deze kleren aan, doe je oude kleren ook weer in de zelfde bak.")
          const klerenuit = readlineSync.keyInSelect(['doe je kleren uit en doe de nieuwe kleren aan', ], 'Wat ga je doen?');
          if (klerenuit==0) {
            console.log ("Je doet al je kleren uit en doet ze in de bak.")
            console.log ("Je doet je nieuwe kleren aan.")
          }
          console.log ("Gevangenis agent: loop met mij mee ik breng je naar je cel.")
          console.log ("Gevangenis agent: dit is je nieuwe cel, ga maar naar binnen.")
          const cel = readlineSync.keyInSelect(['loop in de cel', 'loop niet in de cel', ], 'Wat ga je doen?');
          if (cel==0) {
            console.log ("je loopt in de cel..")
          }
          else {
            console.log ("De gevangenis agent trapt je in de cel.")
          }
          console.log ("de agent doet de deur achter je dicht.")
          console.log (`#########################################`)
          console.log (`GEVANGENIS EINDE`)
          console.log (`#########################################`)
          startgame()
          
        }
      }
    }
  }
}

function naarhethuis()
{
      console.log ("je bent bij de grote huis, wat wil je doen?")
      const grotehuis = readlineSync.keyInSelect(['aan bellen', 'aan kloppen.', 'weg gaan', ], 'Wat ga je doen?');
      if (grotehuis==0 ) {
        console.log ("Je belt aan..")
        console.log ("niemand reageert.")
        naarhethuis();
      }
      if (grotehuis==1) {
        console.log ("Je klopt aan..")
        console.log ("niemand reageert.")
        naarhethuis()
      }

      if (grotehuis==2) {
      console.log ("je loopt weg..");
      IndeStadKeuze()
      

      }
    }
  
  
startgame()