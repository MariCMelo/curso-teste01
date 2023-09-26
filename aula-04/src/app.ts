import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => res.send("0k"));

export default app;
