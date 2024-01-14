import express from 'express';
import userRouter from './router/userRouter.js';
import theaterOwnerRouter from './router/theaterOwnerRouter.js';
import seatBookingRoute from './router/seatSelectionRouter.js';
import connectDB from './connection/dbConfig.js';
import cors from 'cors';
connectDB();
var app = express();
app.use(cors());
app.use(express.urlencoded({expanded:true}));
app.use(express.json());

app.use("/user",userRouter);
app.use("/seatBookingChart",seatBookingRoute);
app.use("/theaterOwner",(req,res,next)=>{
    console.log("in app.js backend") 
    next();
},theaterOwnerRouter);

app.listen(3001,()=>{
    console.log("Server listen on port http://localhost:3001");
});
