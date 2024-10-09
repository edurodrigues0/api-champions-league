import * as PlayerRepository from "../../repositories/player-repository";
import { GoalkeeperStatics, PlayerStatistics } from "../../models/statistics-model";
import { StatusHttpNotFound, StatusHttpOK } from "../../utils/http-helper";

export const updatePlayerData = async (
  playerId: number,
  statistics: PlayerStatistics | GoalkeeperStatics
) => {
  const data = await PlayerRepository.updatePlayer(playerId, statistics);
  let response = null;

  if (!data) {
    return await StatusHttpNotFound();
  }

  response = StatusHttpOK(data);
  return response;
};