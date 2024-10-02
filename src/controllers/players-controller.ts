import { Request, Response } from "express"
import { getPlayersData } from "../services/players/get-players"
import { StatusHttpOK } from "../utils/http-helper"
export const getPlayers = async (req: Request, res: Response) => {

  const data = await getPlayersData()
  const  { statusCode, body } = await StatusHttpOK(data);

  res.status(statusCode).json(body)
}
