import {Router} from "express";
import { getUsers,createUser,getSpecificUser } from "../controllers/UserController.js";

export const userRouter: Router = Router();


// get all users
userRouter.get('/users', getUsers);


// creating user
userRouter.post('/create-user', createUser);

// get specific user
userRouter.get('/users/:id',getSpecificUser);