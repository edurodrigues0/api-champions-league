interface PlayerModel { 
  id: number;
  name: string;
}

const database: PlayerModel[] = [
  { id: 1, name: "Messi" },
  { id: 2, name: "Neymar JR" },
  { id: 3, name: "Cristiano Ronaldo" },
]

export const fetchPlayers = async (): Promise<PlayerModel[]> => {
  return database;
}

export const findPlayerById = async (playerId: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === playerId)
}
