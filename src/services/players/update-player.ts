import { GoalkeeperStatistics, PlayerStatistics } from "../../models/statistics-model";
import { updatePlayer } from "../../repositories/prisma/player-prisma-repository";
import { StatusHttpNotFound, StatusHttpOK } from "../../utils/http-helper";

export const updatePlayerData = async (
  playerId: number,
  statistics: PlayerStatistics | GoalkeeperStatistics
) => {
  const data = await updatePlayer(playerId, statistics);
  let response = null;

  if (data === null) {
    return await StatusHttpNotFound();
  }

  response = StatusHttpOK({ message: "Player updated" });
  return response;
};