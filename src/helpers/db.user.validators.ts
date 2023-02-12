import { UserRepository } from "../repositories/user.repository";
import { dbConnection } from "../database/config";
import { User } from "../entities/user.entity";
import { UserController } from "../controllers/user.controller";

export const emailExists = async (email = '') => {
    const existsEmail = await UserController.findUserByEmail();
    if (existsEmail) {
        throw new Error(`The email: ${email}, is already registered`);
    }
}