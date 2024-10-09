import { Router } from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  deletePlayerById,
  updatePlayer,
} from "../controllers/players-controller";

export const router = Router();

router.get("/players", getPlayers);
router.get("/players/:playerId", getPlayerById);

router.post("/players", createPlayer);
router.patch("/players/:playerId", updatePlayer);

router.delete("/players/:playerId", deletePlayerById);