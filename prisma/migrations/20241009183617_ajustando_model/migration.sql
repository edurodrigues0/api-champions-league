/*
  Warnings:

  - You are about to drop the `Club` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Statistics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Club_name_key";

-- DropIndex
DROP INDEX "Statistics_playerId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Club";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Statistics";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "clubs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "statistics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "playerId" INTEGER NOT NULL,
    "overall" INTEGER,
    "pace" INTEGER,
    "shooting" INTEGER,
    "passing" INTEGER,
    "dribbling" INTEGER,
    "defending" INTEGER,
    "physical" INTEGER,
    "diving" INTEGER,
    "handling" INTEGER,
    "kicking" INTEGER,
    "reflexes" INTEGER,
    "speed" INTEGER,
    "positioning" INTEGER,
    CONSTRAINT "statistics_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "clubId" INTEGER NOT NULL,
    CONSTRAINT "players_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "clubs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_players" ("clubId", "id", "name", "nationality", "position") SELECT "clubId", "id", "name", "nationality", "position" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "clubs_name_key" ON "clubs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "statistics_playerId_key" ON "statistics"("playerId");
