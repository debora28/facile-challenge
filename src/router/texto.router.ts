import express from "express";
import controller from "../controller/texto.controller";

class TextoRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.middlewares();
    this.routers();
  }

  private middlewares() {}

  private routers() {
    this.router.get("/", controller.all);
    this.router.get("/:id/", controller.find);
    this.router.post("/", controller.create);
    this.router.post("/edit/:id/", controller.update);
    this.router.delete("/delete/:id/", controller.delete);
  }
}

export default new TextoRouter().router;
