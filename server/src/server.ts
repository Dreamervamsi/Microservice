import { app } from './app.js';
import './config/db.js';
import './models/userModel.js';

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening");
});
