import { IRead, IWrite } from './interfaces/base.interfaces';
import { BaseRepository } from "./base/base.repository";
import { User } from "../entities/user.entity"
import { ObjectId } from 'mongodb';

export class UserRepository extends BaseRepository<User>{
    
    static _collection: any;

    countOfUsers(): Promise<number> {
        return this._collection.count({})
    }

    async findByEmail(email): Promise<any> {
        const query: Object = { email: email };
        const result: any = await this._collection.findOne(query);
        return result;
    }

}