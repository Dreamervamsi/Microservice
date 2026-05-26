import { type Request, type Response, Router } from "express";
import { User } from "../models/userModel.js";

type userRegister = { name: string, email: string }

// get all users
export const getUsers = async (req: Request, res: Response) => {
    try{
        const getUsers = await User.find({});
        return res.json({ 'users': getUsers });
    }catch(err:any){
        return res.status(500).json({ 'message': "Error while fetching users",'error':err.message });
    }
}

// get specific user
export const getSpecificUser = async (req:Request,res:Response) =>{
    try{
        const userId = req.params.id;

        const user  = await User.findById(userId);
        if(!user)
        {
            return res.status(404).json({
                'message':'User Doesnt exist',
            });
        }
        return res.json({
            'message':'User retrived successfully',
            'user':user
        });

    }catch(error:any){
        console.log(error.message);
        res.status(500).json({'mesage':"Error at retriving specific user"});
    }
}

// creating user
export const createUser = async (req: Request, res: Response) => {
    const { name, email }: userRegister = req.body;
    try {
        if(!name || !email)
        {
            return res.status(400).json({'message':'Name and email are required'});
        }
        const newUser = await User.create({
            name,
            email
        });

        return res.json({ 'message': "USer created", 'user': newUser });
    }
    catch(err:any){
        return res.status(500).json({'message':'Error while creating user','error':err.message});
    }
}
