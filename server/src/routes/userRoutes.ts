import {Router} from "express";
import { getUsers,createUser } from "../controllers/userController.js";

export const userRouter: Router = Router();


// get all users
userRouter.get('/users', getUsers);

// creating user
userRouter.post('/create-user', createUser);
