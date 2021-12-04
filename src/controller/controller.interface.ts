import { Request, Response, NextFunction } from "express";

interface Controller {
  all(req: Request, res: Response, next: NextFunction): Promise<any>;
  find(req: Request, res: Response, next: NextFunction): Promise<any>;
  create(req: Request, res: Response, next: NextFunction): Promise<any>;
  update(req: Request, res: Response, next: NextFunction): Promise<any>;
  delete(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export default Controller;
