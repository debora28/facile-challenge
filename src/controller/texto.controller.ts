import { NextFunction, Request, Response } from "express";
import Controller from "./controller.interface";
import connection from "../db/models/connection";
import Texto from "../db/models/texto-model";
import { QueryTypes, Sequelize } from "sequelize";
var crypto = require("crypto");

class TextoController implements Controller {

  // GET http://localhost:3333/encripts/
  async all(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const textos = await Texto.findAll();

      return res.status(200).json({ data: textos });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  // GET http://localhost:3333/encripts/:id
  async find(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.params;
      let alg = "aes-256-ctr";
      let pwd = "456456";

      const texto = await Texto.findOne({ where: { id } });
      const name = texto.name;

      const decrypted = crypto
        .createDecipher(alg, pwd)
        .update(name, "hex", "utf8");

      res.status(200).json({ name: decrypted });
    } catch (error) {
      res.status(401).json({
        message: "Não foi possível obter o registro. " + error.message,
      });
    }
  }

  // POST http://localhost:3333/encripts/
  async create(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name } = req.body;
      let alg = "aes-256-ctr";
      let pwd = "456456";

      const crypted = crypto.createCipher(alg, pwd).update(name, "utf8", "hex");
      const texto = await Texto.create({
        name: crypted,
      });

      res.status(200).json({ id: texto.id, encripted_name: "shazam" });
    } catch (error) {
      console.log(error);

      res.status(401).json({
        code: "E_VALIDATION_FAILURE",
        message: 'O campo "name" é obrigatório',
      });
    }
  }

  // POST http://localhost:3333/encripts/edit/:id
  async update(req: Request, res: Response, next: NextFunction): Promise<any> {
    const { name } = req.body;
    try {
      const { id } = req.params;
      let params = { name };
      
      await Texto.update(params, { where: { id } });

      res.status(200).json({ message: "Texto atualizado com sucesso. " });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  // DELETE http://localhost:3333/encripts/delete/:id
  async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.params;
      await Texto.destroy({ where: { id } });

      res.status(200).json({ message: "Texto excluído com sucesso. " });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}
export default new TextoController();
