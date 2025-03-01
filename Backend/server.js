import { default as bodyParser, default as express } from "express";
import mongoose from "mongoose";

import userRouter from './routes/user.js';

const app=express();

app.use(bodyParser.json())

app.use('/api',userRouter)

mongoose.connect(
    "mongodb+srv://sanikaapatil03:FNIHSpBWxLi23M6c@cluster0.xjt1z.mongodb.net/",{
        dbName:"MERN_Recipe_Web",

    }
).then( ()=>console.log("MongoDB is Connected..")).catch((err)=>console.log(err.message));

const port=3000;

app.listen(port,() =>console.log(`server is running on port ${port}`));




