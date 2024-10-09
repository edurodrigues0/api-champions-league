import { Request, Response } from "express"
import { getPlayersData } from "../services/players/get-players"
import { getPlayerByIdData } from "../services/players/get-player-by-id"
import { createPlayerData } from "../services/players/create-player"
import { deletePlayerByIdData } from "../services/players/delete-player-by-id"
import { PlayerStatistics, GoalkeeperStatistics } from "../models/statistics-model"
import { updatePlayerData } from "../services/players/update-player"

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayersData()
  const { statusCode, body } = httpResponse

  res.status(statusCode).json(body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.playerId);
  const httpResponse = await getPlayerByIdData(playerId);
  const { statusCode, body } = httpResponse;

  res.status(statusCode).json(body);
}

export const createPlayer = async (req: Request, res: Response) => {
  const playerData = req.body;

  const httpResponse = await createPlayerData(playerData);
  const { statusCode, body } = httpResponse;

  res.status(statusCode).json(body);
}

export const updatePlayer = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.playerId);
  const playerData: GoalkeeperStatistics | PlayerStatistics = req.body;

  const httpResponse = await updatePlayerData(playerId, playerData);
  const { statusCode, body } = httpResponse;

  res.status(statusCode).json(body);
}

export const deletePlayerById = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.playerId);

  const httpResponse = await deletePlayerByIdData(playerId)
  const { statusCode, body } = httpResponse;

  res.status(statusCode).json(body);
}