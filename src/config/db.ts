import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/users')
    .then(() => {
        console.log("Mongodb connected");
    })
    .catch((err) => {
        console.log("Database error");
    });