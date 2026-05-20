import mongoose from "mongoose";

const mongoUri =
    process.env.MONGO_URI ?? "mongodb://mongo:27017/users";

mongoose
    .connect(mongoUri)
    .then(() => {
        console.log("Mongodb connected");
    })
    .catch((err) => {
        console.log("Database error", err.message);
    });