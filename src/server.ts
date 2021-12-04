import express, { json } from "express";
import cors from 'cors';
import textoRouter from "./router/texto.router";

class Server {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.middleware();
    this.routers();
  }
  private middleware() {
    this.application.use(json());
    this.application.use(cors());
  }

  private routers() {
    this.application.get("/", (req, res) => res.send("Api funcionando. "));
    this.application.use("/encripts/", textoRouter);

    this.application.use((req, res, next) => {
      res.status(404).json({ message: "Não foi possível acessar a rota." });
    });
  }
}

export default new Server().application;
