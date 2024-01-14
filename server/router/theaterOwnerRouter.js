import express from 'express';
import { upload } from '../multer/multer.js';

import {theaterOwnerRegistrationController,checkMailController,verifyMailConroller} from '../controller/theaterOwnerRegController.js';
var theaterOwnerRouter = express.Router();

theaterOwnerRouter.post('/theaterRegistration',upload,checkMailController,verifyMailConroller);
theaterOwnerRouter.get('/verifyemail',theaterOwnerRegistrationController);
// theaterOwnerRouter.post('/userlogin'); // remaining
export default theaterOwnerRouter;
