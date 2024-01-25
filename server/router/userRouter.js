// import express from 'express';
// import { userRegistrationController,checkMailController,verifyMailConroller,userLoginController, emailFunction } from '../controller/userController.js';
// var userRouter = express.Router();

// userRouter.post('/register',checkMailController,verifyMailConroller);
// userRouter.get('/verifyemail',userRegistrationController);
// userRouter.post('/userlogin',userLoginController); // remaining
// export default userRouter;




import express from 'express';
import { emailVerifiactionController , verifyOtpController , userauthenticationController , userLoginController , userLogoutController } from '../controller/userController.js';
import { upload } from '../middleware/multer.js';

const userRouter = express.Router();

userRouter.post("/emailVerification",emailVerifiactionController);
userRouter.post("/verifyOtp",verifyOtpController);
userRouter.post("/authentication",userauthenticationController);
userRouter.post("/login",userLoginController);
userRouter.post("/logout",userLogoutController);


export default userRouter;
