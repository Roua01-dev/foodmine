import dotenv from 'dotenv';

import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router'
import userRouter from'./routers/user.router'
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
dotenv.config();

dbConnect();   
 
const app=express();
app.use(express.json());



app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);




const port = 5000;
app.listen(port,()=>{
    //lena k ta3ml npm start wen 7atina    
    // "start": "cd src && nodemon server.ts",fel package.json
    //tatla3 jomla heki l hatineha f console

    console.log("Website served on http://localhost: "+port);
})

