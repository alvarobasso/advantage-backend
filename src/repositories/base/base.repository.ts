import { IRead, IWrite } from '../interfaces/base.interfaces';
import { Db, Collection, InsertOneResult, ObjectId } from 'mongodb';
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

  public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async find(): Promise<T[]> {
    const result: any = await this._collection.find().toArray();
    return result;
  }

  async findOne(id: string): Promise<T> {
    const query: Object = { _id: new ObjectId(id) };
    const result: any = await this._collection.findOne(query);
    return result;
  }

  async create(item: T): Promise<boolean> {
    const result: InsertOneResult = await this._collection.insertOne(item);
    return !!result.insertedId;
  }

  async update(id: string, item: T): Promise<boolean> {
    const query: Object = { _id: new ObjectId(id) }
    const user: Object = { $set: item }
    const result = await this._collection.updateOne(query, user);
    return !!result.upsertedCount;
  }

  async delete(id: string): Promise<T> {
    const query:Object = { _id: new ObjectId(id) }
    const user:Object = { $set: { status: false } };
    const result: any = await this._collection.updateOne(query, user);
    return result.modifiedCount;
  }

}