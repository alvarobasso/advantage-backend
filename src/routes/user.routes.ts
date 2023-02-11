import { UserController } from "../controllers/user.controller";

const { Router } = require('express');
const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser, );
router.delete('/:id', UserController.deleteUser);

module.exports = router;