import { Player } from "@prisma/client";

interface PlayerPresenter {
  id: number;
  name: string;
  nationality: string;
  position: string;
  club: {
    name: string;
  };
  Statistics: any; 
}

export function PlayerPresenter(player: PlayerPresenter) {
  return {
    id: player.id,
    name: player.name,
    nationality: player.nationality,
    position: player.position,
    club: player.club.name,
    statistics: player.Statistics.type === "PLAYER" ? {
      overall: player.Statistics.overall,
      pace: player.Statistics.pace,
      shooting: player.Statistics.shooting,
      passing: player.Statistics.passing,
      dribbling: player.Statistics.dribbling,
      defending: player.Statistics.defending,
      physical: player.Statistics.physical,
    } : {
      overall:player.Statistics.overall,
      diving:player.Statistics.diving,
      handling:player.Statistics.handling,
      kicking:player.Statistics.kicking,
      reflexes:player.Statistics.reflexes,
      speed:player.Statistics.speed,
      positioning:player.Statistics.position,
    }
  }
}