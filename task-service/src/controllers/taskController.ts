import {Request,Response} from 'express';
import { Task } from '../models/taskModel.js';

// get all tasks
export const getTasks = async (req:Request,res:Response)=>{
    try{
        const tasks = await Task.find({});
        return res.json({'message':tasks});
    }catch(error){
        return res.status(500).json({'Error':'while retriving tasks'});
    }
}

// create task
export const createTask = async (req:Request,res:Response)=>{
    const {title,description,userId} = req.body;
    if(!title || !userId){
        return res.status(400).json({'Error':'Please fill all required fields'});
    }
    try {
        const task = await Task.create({title,description,userId});

        return res.json({'message':'Task created','task':task});
    } catch (error) {
        console.log("Error while creating task:",error.message);
        return res.status(500).json({'Error:':'Error at creating task'});
    }
}

// get task by id
export const getTaskById = async (req:Request,res:Response)=>{
    try {
        const taskId = req.params.id;
        
        const data = await Task.findById(taskId);

        if(!data){
            return res.status(404).json({'Error':'Task not found'});
        }
        res.json({'message':data});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({'Error':'while retriving task by id'});
    }
}