import { type Request, type Response, Router } from "express";
import { User } from "../models/userModel.js";
import axios from 'axios';

export const userRouter: Router = Router();

type userRegister = { name: string, email: string }

userRouter.get('/', (req: Request, res: Response) => {
    res.send("hello")
});

// get all users
userRouter.get('/users', async (req: Request, res: Response) => {
    const getUsers = await User.find({});
    console.log(getUsers);
    res.json({ 'users': getUsers });
});

// creating user
userRouter.post('/create-user', async (req: Request, res: Response) => {
    const { name, email }: userRegister = req.body;
    console.log(name, email);
    try {

        await User.create({
            name,
            email
        });
        res.json({ 'message': "USer created" });
    }
    catch {
        console.log("Error while creating user");
    }
});