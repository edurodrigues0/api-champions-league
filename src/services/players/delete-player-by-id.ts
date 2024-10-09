import * as PlayerRepository from "../../repositories/player-repository";
import { StatusHttpNotFound, StatusHttpOK } from "../../utils/http-helper";

export const deletePlayerByIdData = async (playerId: number) => {
  const data = await PlayerRepository.deletePlayer(playerId);
  let response = null;

  if(data === null) {
    return await StatusHttpNotFound();
  }

  response = await StatusHttpOK({ message: "Player deleted" });
  return response;
}