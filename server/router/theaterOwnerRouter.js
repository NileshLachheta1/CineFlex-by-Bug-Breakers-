import express from 'express';
import { upload } from '../multer/multer.js';
import {theaterRegistartion} from '../controller/theaterOwnerRegController.js'
var router=express.Router();


router.post('/theaterRegistration',(req,res,next)=>{
      console.log("i am in theaterRegistration router");
      next();
},theaterRegistartion);

export default router;