import { Request, Response } from "express"
export const getPlayers = (req: Request, res: Response) => {
  res.status(200).json({ player: "Neymar" })
}
