import { Router } from "express";
import { getTaskById, getTasks,createTask } from "../controllers/taskController.js";

export const taskRouter = Router();
// get all tasks

taskRouter.get('/posts',getTasks);

// create tasks

taskRouter.post('/create-posts',createTask);

// get specific task

taskRouter.get('/posts/:id',getTaskById);