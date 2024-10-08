import { fetchPlayers } from "../../repositories/prisma/player-prisma-repository";
import { StatusHttpNoContent, StatusHttpOK } from "../../utils/http-helper";

export const getPlayersData = async () => {
  const data = await fetchPlayers();
  let response = null;

  if(!data) {
    return await StatusHttpNoContent();
  }

  response = await StatusHttpOK(data);

  return response;
}