import fs from "node:fs";
import path from "node:path";
import { ClubModel } from "../models/club-model";

export const fetchClubs = async (): Promise<ClubModel[]> => {
  const data = fs.readFileSync("./src/data/clubs.json", "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);

  return clubs;
}