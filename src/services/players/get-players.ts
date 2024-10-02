import * as PlayerRepository from "../../repositories/player-repository";
import { StatusHttpNoContent, StatusHttpOK } from "../../utils/http-helper";

export const getPlayersData = async () => {
  const data = await PlayerRepository.fetchPlayers();
  let response = null;

  if(data) {
    response = await StatusHttpOK(data);
  } else {
    response = await StatusHttpNoContent();
  }

  return response;
}