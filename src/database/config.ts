import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const uri: any = process.env.DATABASE;

export const dbConnection = async function () {
  try {
    const connect = await MongoClient.connect(uri);
    console.log("DataBase is online");
    return connect;
  } catch (error) {
    console.log(error);
    throw new Error("Error starting database");
  }
};