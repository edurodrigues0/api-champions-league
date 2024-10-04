import { Router } from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
} from "../controllers/players-controller";

export const router = Router();

router.get("/players", getPlayers);
router.get("/players/:playerId", getPlayerById);

router.post("/players", createPlayer);