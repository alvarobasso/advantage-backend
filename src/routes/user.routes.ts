import { UserController } from "../controllers/user.controller";
import { check } from "express-validator"
import { validateFields } from "../middlewares/user.middleware"
import { UserRepository } from '../repositories/user.repository';
import { emailExists } from "../helpers/db.user.validators";

const { Router } = require('express');
const router = Router();

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUser);

router.post('/',
    [
        check('nameUser', 'The name is required').not().isEmpty(),
        check('dateBirth', 'The date of birth is required').not().isEmpty(),
        check('email', 'The email is required').not().isEmpty(),
        check('email', 'The email is not valid').isEmail(),
        check('email').custom(emailExists),
        check('phoneNumber', 'The phone number is required').not().isEmpty(),
        validateFields],
    UserController.createUser);

router.put('/:id', UserController.updateUser,);

router.delete('/:id', UserController.deleteUser);

module.exports = router;