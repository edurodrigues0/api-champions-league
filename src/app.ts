import express from "express";

import { getPlayer } from "./controllers/players-controller";

export function createApp() {
  const app = express();

  app.use(express.json())
  
  app.get("/players", getPlayer)

  return app
}