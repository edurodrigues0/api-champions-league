import { prisma } from "../../data/prisma";
import { PlayerModel } from "../../models/player-model";
import { PlayerStatistics, GoalkeeperStatistics } from "../../models/statistics-model";
import { PlayerPresenter } from "../../presenter/player/player-presenter";
import { isPlayerStatistics } from "../../utils/is-player-statistics";

export const fetchPlayers = async (): Promise<PlayerModel[]> => {
  const players = await prisma.player.findMany({
    select: {
      id: true,
      name: true,
      nationality: true,
      position: true,
      club: {
        select: {
          name: true
        }
      },
      statistics: true,
    }
  });

  return players.map((p) => PlayerPresenter(p))
}

export const findPlayerById = async (
  playerId: number
): Promise<PlayerModel | null> => {
  const player = await prisma.player.findUnique({
    where: {
      id: playerId,
    },
    select: {
      id: true,
      name: true,
      nationality: true,
      position: true,
      club: {
        select: {
          name: true,
        },
      },
      statistics: true,
    },
  })

  if (!player) {
    return null
  }

  return PlayerPresenter(player)
}

export const createPlayer = async (
  player: PlayerModel,
): Promise<number | null> => {
  const playerAlreadyExists = await prisma.player.findFirst({
    where: {
      name: { equals: player.name },
      club: {
        name: {
          equals: player.club,
        },
      },
    },
  })

  if (playerAlreadyExists) {
    return null
  }

  const statisticsWithPlayer = await isPlayerStatistics(player.statistics)
  const statisticsData = statisticsWithPlayer
  ? {
      type: "PLAYER",
      overall: player.statistics.overall,
      pace: (player.statistics as PlayerStatistics).pace,
      shooting: (player.statistics as PlayerStatistics).shooting,
      passing: (player.statistics as PlayerStatistics).passing,
      dribbling: (player.statistics as PlayerStatistics).dribbling,
      defending: (player.statistics as PlayerStatistics).defending,
      physical: (player.statistics as PlayerStatistics).physical,
    }
  : {
      type: "GOALKEEPER",
      overall: player.statistics.overall,
      diving: (player.statistics as GoalkeeperStatistics).diving,
      handling: (player.statistics as GoalkeeperStatistics).handling,
      kicking: (player.statistics as GoalkeeperStatistics).kicking,
      reflexes: (player.statistics as GoalkeeperStatistics).reflexes,
      speed: (player.statistics as GoalkeeperStatistics).speed,
      positioning: (player.statistics as GoalkeeperStatistics).positioning,
    };

  try {
    const playerCreated = await prisma.player.create({
      data: {
        name: player.name,
        nationality: player.nationality,
        position: player.position,
        club: {
          connectOrCreate: {
            where: { name: player.club },
            create: { name: player.club }
          }
        },
        statistics: {
          create: statisticsData,
        }
      }
    });

    return playerCreated.id
  } catch (error) {
    console.error('Error creating player:', error);
    return null;
  }
};

export const updatePlayer = async (
  playerId: number,
  statistics: PlayerStatistics | GoalkeeperStatistics,
): Promise<void | null> => {
  const player = await prisma.player.findUnique({
    where: {
      id: playerId
    },
  })

  if (!player) {
    return null
  };

  await prisma.statistics.update({
    where: {
      playerId: playerId,
    },
    data: statistics
  })

  return
};

export const deletePlayer = async (playerId: number): Promise<void | null> => {
  await prisma.player.delete({
    where: {
      id: playerId,
    },
  })
};
