import { IRead, IWrite } from './interfaces/base.interfaces';
import { BaseRepository } from "./base/base.repository";
import { User } from "../entities/user.entity"
import { ObjectId } from 'mongodb';

export class UserRepository extends BaseRepository<User>{

    countOfUsers(): Promise<number> {
        return this._collection.count({})
    }

}