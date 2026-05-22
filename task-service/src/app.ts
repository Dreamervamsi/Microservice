import express, { Application } from 'express';
import {taskRouter} from './routes/taskRoutes.js';

export const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use('/',taskRouter);
// middlewares
