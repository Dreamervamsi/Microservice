import mongoose from 'mongoose';

interface task{
    title:String,
    description:String,
    userId:String,
    createdAt:Date
}

const taskSchema = new mongoose.Schema<task>({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    userId:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

export const Task = mongoose.model('Task',taskSchema);