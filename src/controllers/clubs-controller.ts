import { Request, Response } from "express"
import { getClubsData } from "../services/clubs/get-clubs"

export const getClubs = async (_req: Request, res: Response) => {
  const httpResponse = await getClubsData();
  const { statusCode, body } = httpResponse;

  res.status(statusCode).json(body);
}