import { StatusHttpNoContent, StatusHttpOK } from "../../utils/http-helper";

export const getPlayersData = async () => {
  const data = { player: "Neymar JR"};
  let response = null;


  if(data) {
    response = await StatusHttpOK(data);
  } else {
    response = await StatusHttpNoContent();
  }

  return response;
}