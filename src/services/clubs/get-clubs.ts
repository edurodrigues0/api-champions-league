import * as ClubsRepository from "../../repositories/clubs-repository";
import { StatusHttpNoContent, StatusHttpOK } from "../../utils/http-helper";

export const getClubsData = async () => {
  const data = await ClubsRepository.fetchClubs();
  let response = null;

  if(!data) {
    return await StatusHttpNoContent();
  }

  response = await StatusHttpOK(data);

  return response;
}