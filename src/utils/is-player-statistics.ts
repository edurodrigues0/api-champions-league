import {GoalkeeperStatistics, PlayerStatistics } from "../models/statistics-model";

export async function isPlayerStatistics(
  obj: PlayerStatistics | GoalkeeperStatistics
): Promise<boolean> {
  const requiredProperties = [
    'overall',
    'pace',
    'shooting',
    'passing',
    'dribbling',
    'defending',
    'physical'
  ];

  for (const prop of requiredProperties) {
    if (!(prop in obj)) {
      return false;
    }
  }
  return true;
}