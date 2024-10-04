export interface PlayerModel { 
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: PlayerStatistics | GoalkeeperStatics
}

interface PlayerStatistics {
  Overall: number;
  Pace: number;
  Shooting: number;
  Passing: number;
  Dribbling: number;
  Defending: number;
  Physical: number;
}

interface GoalkeeperStatics {
  Overall: number;
  Diving: number;
  Handling: number;
  Kicking: number;
  Reflexes: number;
  Speed: number;
  Positioning: number;
}