import { type Request, type Response, Router } from "express";
import { User } from "../models/userModel.js";

type userRegister = { name: string, email: string }

// get all users
export const getUsers = async (req: Request, res: Response) => {
    try{
        const getUsers = await User.find({});
        res.json({ 'users': getUsers });
    }catch(err:any){
        res.status(500).json({ 'message': "Error while fetching users",'error':err.message });
    }
}


// creating user
export const createUser = async (req: Request, res: Response) => {
    const { name, email }: userRegister = req.body;
    try {
        if(!name || !email)
        {
            res.status(400).json({'message':'Name and email are required'});
            return;
        }
        const newUser = await User.create({
            name,
            email
        });
        res.json({ 'message': "USer created", 'user': newUser });
    }
    catch(err:any){
        res.status(500).json({'message':'Error while creating user','error':err.message});
    }
}