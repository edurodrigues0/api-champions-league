import { GoalkeeperStatistics, PlayerStatistics } from "./statistics-model";

export interface PlayerModel { 
  id: number;
  statisticsType?: "PLAYER" | "GOALKEEPER"
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: PlayerStatistics | GoalkeeperStatistics;
};