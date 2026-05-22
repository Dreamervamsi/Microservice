import { app } from "./app.js";
import './config/db.js';

app.listen(process.env.PORT || 3001,()=>{
    console.log('task service running');
});