import { fetchClubs } from "../../repositories/prisma/clubs-prisma-repository";
import { StatusHttpNoContent, StatusHttpOK } from "../../utils/http-helper";

export const getClubsData = async () => {
  const data = await fetchClubs();
  let response = null;

  if(!data) {
    return await StatusHttpNoContent();
  }

  response = await StatusHttpOK(data);

  return response;
}