import { prisma } from "../../data/prisma";
import { ClubModel } from "../../models/club-model";

export const fetchClubs = async (): Promise<ClubModel[]> => {
  const clubs = await prisma.club.findMany();

  return clubs;
}