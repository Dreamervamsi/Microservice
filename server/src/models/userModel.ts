import mongoose from "mongoose";

interface user {
    name: string,
    email: string
}

const userSchema = new mongoose.Schema<user>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

export const User = mongoose.model<user>("User", userSchema);
