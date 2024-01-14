import express from 'express';
import { userRegistrationController,checkMailController,verifyMailConroller,userLoginController, emailFunction } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/register',checkMailController,verifyMailConroller);
userRouter.get('/verifyemail',userRegistrationController);
userRouter.post('/userlogin',userLoginController); // remaining
export default userRouter;
