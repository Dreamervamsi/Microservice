import express, { type Application } from 'express';
import { userRouter } from './routes/userRoutes.js'

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", userRouter);


// middlewares