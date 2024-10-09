import { PrismaClient } from "@prisma/client";

const clubsList = [
  {
    "name": "Real Madrid"
  },
  {
    "name": "Barcelona"
  },
  {
    "name": "Manchester City"
  },
  {
    "name": "Bayern Munich"
  },
  {
    "name": "Paris Saint-Germain"
  },
  {
    "name": "Inter Milan"
  },
  {
    "name": "Napoli"
  },
  {
    "name": "Arsenal"
  },
  {
    "name": "AC Milan"
  },
  {
    "name": "Atletico Madrid"
  },
  {
    "name": "Borussia Dortmund"
  },
  {
    "name": "Newcastle United"
  },
  {
    "name": "RB Leipzig"
  },
  {
    "name": "FC Porto"
  },
  {
    "name": "Benfica"
  },
  {
    "name": "Celtic"
  },
  {
    "name": "Shakhtar Donetsk"
  },
  {
    "name": "Lazio"
  },
  {
    "name": "Galatasaray"
  },
  {
    "name": "Feyenoord"
  },
  {
    "name": "Sevilla"
  },
  {
    "name": "Red Star Belgrade"
  },
  {
    "name": "Union Berlin"
  },
  {
    "name": "Real Sociedad"
  },
  {
    "name": "Antwerp"
  },
  {
    "name": "Lens"
  },
  {
    "name": "FC Copenhagen"
  },
  {
    "name": "Young Boys"
  },
  {
    "name": "Braga"
  },
  {
    "name": "Salzburg"
  }
]

const prisma = new PrismaClient()
async function seed() {
  await prisma.club.createMany({
    data: clubsList
  })

  await prisma.player.create({
    data: {
      name: "Vini Jr",
      nationality: "Brazil",
      position: "Left forward",
      club: {
        connect: { name: "Real Madrid" },
      },
      statistics: {
        create: {
          type: "PLAYER",
          overall: 90,
          pace: 95,
          shooting: 84,
          passing: 81,
          dribbling: 90,
          defending: 29,
          physical: 69,
        }
      }
    }
  })

  await prisma.player.create({
    data: {
      name: "Gregor Kobel",
      nationality: "Switzerland",
      position: "Goalkeeper",
      club: {
        connect: { name: "Borussia Dortmund" },
      },
      statistics: {
        create: {
          type: "GOALKEEPER",
          overall: 94,
          diving: 94,
          handling: 91,
          kicking: 81,
          reflexes: 96,
          speed: 51,
          positioning: 93,
        }
      }
    }
  })

  await prisma.player.create({
    data: {
      name: "Erling Haaland",
      nationality: "Norway",
      position: "Striker",
      club: {
        connect: { name: "Manchester City" },
      },
      statistics: {
        create: {
          type: "PLAYER",
          overall: 91,
          pace: 88,
          shooting: 92,
          passing: 70,
          dribbling: 81,
          defending: 45,
          physical: 88
        }
      }
    }
  })
}

seed().then(async () => {
  await prisma.$disconnect()
}).catch(async (err) => {
  console.log(err)
  await prisma.$disconnect()
  process.exit(1)
})

