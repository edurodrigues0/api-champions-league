import express, { Request, Response } from "express";

export function createApp() {
  const app = express();

  app.use(express.json())
  
  app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ player: "Neymar" })
  })

  return app
}