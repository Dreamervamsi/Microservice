import { app } from "./app";
import './models/taskModel.js';
import './controllers/taskController.js';
import './config/db.js';

app.listen(process.env.PORT || 3001,()=>{
    console.log('task service running');
});