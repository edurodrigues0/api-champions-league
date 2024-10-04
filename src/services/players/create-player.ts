import { PlayerModel } from "../../models/player-model";
import { createPlayer } from "../../repositories/player-repository";
import { StatusHttpBadRequest, StatusHttpConflict, StatusHttpCreated, StatusHttpNoContent } from "../../utils/http-helper";

export const createPlayerData = async (player: PlayerModel) => {
  if(Object.keys(player).length === 0) {
    return StatusHttpBadRequest();
  }

  const playerData = await createPlayer(player)

  if (!playerData) {
    return await StatusHttpConflict()
  }

  return await StatusHttpCreated();
};