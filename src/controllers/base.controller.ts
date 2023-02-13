import { Request, Response } from 'express';

export class BaseController {

  static dataBase: string;

  static responseObject: Object = {
    data: {},
    status: 200,
  }

  constructor() {
    BaseController.dataBase = "advantage";
  }

  static findAll = async (res: Response, repository: any) => {
    try {
      const result = await repository.find();
      res.status(200).send({
        data: result,
        message: "success finding all",
      });
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

  static findById = async (req: Request, res: Response, repository: any) => {
    try {
      const id = req.params.id
      const result = await repository.findOne(id);
      res.status(200).send({
        data: [result],
        message: "success finding by id",
      });
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

  static createNew = async (res: Response, user: Object, repository: any) => {
    try {
      await repository.create(user);
      res.status(200).send({
        data: [user],
        message: "Success creating new record",
      });
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

  static update = async (req: Request, res: Response, repository: any) => {
    try {
      const id = req.params.id
      const user = req.body;
      await repository.update(id, user);
      res.status(200).send({
        data: [user],
        message: "success updating",
      });
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

  static delete = async (req: Request, res: Response, repository: any) => {
    try {
      const id = req.params.id
      const result = await repository.delete(id);
      res.status(200).send({
        data: [id],
        message: "success deleting",
      });
    } catch (err) {
      res.status(404).send(err.message);
    }
  };

}
