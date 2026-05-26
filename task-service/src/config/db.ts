import mongoose from "mongoose";

const mongoUri ="mongodb://mongo:27017/tasks";

mongoose
    .connect(mongoUri)
    .then(() => {
        console.log("Task service Mongodb connected");
    })
    .catch((err) => {
        console.log("Database error", err.message);
    });
