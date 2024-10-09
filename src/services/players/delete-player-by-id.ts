import * as PlayerRepository from "../../repositories/player-repository";
import { StatusHttpBadRequest, StatusHttpOK } from "../../utils/http-helper";

export const deletePlayerByIdData = async (playerId: number) => {
  const data = await PlayerRepository.deletePlayer(playerId);
  let response = null;

  if(data === null) {
    return await StatusHttpBadRequest();
  }

  response = await StatusHttpOK({ message: "Player deleted" });
  return response;
}