import { UserRepository } from '../repositories/user.repository';
import { User } from "../entities/user.entity";
import { dbConnection } from "../database/config";
import { BaseController } from "./base.controller";
import { Request, Response } from 'express';

export class UserController extends BaseController {

  static readonly collection: any = 'users';
  static result: Promise<User>;

  constructor() {
    super();
  }

  static findUserByEmail = async () => {
    dbConnection().then((connection) => {
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      this.result = userRepository.findByEmail('test@correo.com');
      connection.close;
    });
    return this.result;
  }

  static getAllUsers = async (req: Request, res: Response) => {
    dbConnection().then((connection) => {
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      this.findAll(res, userRepository);
      connection.close;
    });
  }

  static getUser = async (req: Request, res: Response) => {
    dbConnection().then(async (connection) => {
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      connection.close;
      try {
        const id = req.params.id
        const result: User = await userRepository.findOne(id);
        res.status(200).send({
          data: [result],
          message: "success finding by id",
        });
      } catch (err: any) {
        res.status(404).send(err.message);
      }
    })
  }

  static createUser = async (req: Request, res: Response) => {
    dbConnection().then((connection) => {
      const user = new User(req.body);
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      this.createNew(res, user, userRepository);
      connection.close;
    });
  };

  static updateUser = async (req: Request, res: Response) => {
    dbConnection().then((connection) => {
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      this.update(req, res, userRepository);
      connection.close;
    });
  };

  static deleteUser = async (req: Request, res: Response) => {
    dbConnection().then((connection) => {
      const userRepository = new UserRepository(connection.db(this.dataBase), this.collection);
      this.delete(req, res, userRepository);
      connection.close;
    });
  }

}
