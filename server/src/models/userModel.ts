import mongoose from "mongoose";

interface user {
    name: string,
    email: string
}

const userSchema = new mongoose.Schema<user>({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});

export const User = mongoose.model<user>("User", userSchema);
