import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { dbConnection } from "../database/config";

export const emailExists = async (email = '') => {
    const collection = await dbConnection();
    const existsEmail = await  collection.db("advantage").collection("users").findOne({ email });
    collection.close();
    if (existsEmail) {
        throw new Error(`The email: ${email}, is already registered`);
    }
}