import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    }
  },
  {
    id: 15,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Diving: 88,
      Handling: 85,
      Kicking: 85,
      Reflexes: 90,
      Speed: 48,
      Positioning: 88,
    }
  }
]

export const fetchPlayers = async (): Promise<PlayerModel[]> => {
  return database;
}

export const findPlayerById = async (playerId: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === playerId)
}

export const createPlayer = async (player: PlayerModel): Promise<number | null> => {
  const playerAlreadyExists = database.find(p => p.id === player.id)

  if (playerAlreadyExists) {
    return null
  }

  database.push(player)
  return player.id
}
