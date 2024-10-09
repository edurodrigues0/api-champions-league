import { findPlayerById } from "../../repositories/prisma/player-prisma-repository";
import { StatusHttpNotFound, StatusHttpOK } from "../../utils/http-helper";

export const getPlayerByIdData = async (playerId: number) => {
  const data = await findPlayerById(playerId);
  let response = null;

  if(!data) {
    return await StatusHttpNotFound();
  }

  response = await StatusHttpOK(data);

  return response;
}