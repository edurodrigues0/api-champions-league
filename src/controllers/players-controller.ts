import { Request, Response } from "express"
import { getPlayersData } from "../services/players/get-players"

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayersData()
  const { statusCode, body } = httpResponse

  res.status(statusCode).json(body)
}
