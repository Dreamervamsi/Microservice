import mongoose from 'mongoose';

interface task{
    title:string,
    description:string,
    userId:string,
    createdAt:Date
}

const taskSchema = new mongoose.Schema<task>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    userId:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

export const Task = mongoose.model('Task',taskSchema);