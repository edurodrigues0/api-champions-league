import { Player } from "@prisma/client";

interface PlayerPresenter {
  id: number;
  name: string;
  nationality: string;
  position: string;
  club: {
    name: string;
  };
  statistics: any; 
}

export function PlayerPresenter(player: PlayerPresenter) {
  return {
    id: player.id,
    name: player.name,
    nationality: player.nationality,
    position: player.position,
    club: player.club.name,
    statistics: player.statistics.type === "PLAYER" ? {
      overall: player.statistics.overall,
      pace: player.statistics.pace,
      shooting: player.statistics.shooting,
      passing: player.statistics.passing,
      dribbling: player.statistics.dribbling,
      defending: player.statistics.defending,
      physical: player.statistics.physical,
    } : {
      overall:player.statistics.overall,
      diving:player.statistics.diving,
      handling:player.statistics.handling,
      kicking:player.statistics.kicking,
      reflexes:player.statistics.reflexes,
      speed:player.statistics.speed,
      positioning:player.statistics.position,
    }
  }
}