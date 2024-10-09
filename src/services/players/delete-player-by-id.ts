import { deletePlayer } from "../../repositories/prisma/player-prisma-repository";
import { StatusHttpBadRequest, StatusHttpOK } from "../../utils/http-helper";

export const deletePlayerByIdData = async (playerId: number) => {
  const data = await deletePlayer(playerId);
  let response = null;
  
  if(data === null) {
    return await StatusHttpBadRequest();
  }

  response = await StatusHttpOK({ message: "Player deleted" });
  return response;
}