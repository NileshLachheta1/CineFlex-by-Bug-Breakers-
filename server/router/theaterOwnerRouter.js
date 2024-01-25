// import express from 'express';
// import { upload } from '../multer/multer.js';

// import {theaterOwnerRegistrationController,checkMailController,verifyMailConroller} from '../controller/theaterOwnerRegController.js';
// var theaterOwnerRouter = express.Router();

// theaterOwnerRouter.post('/theaterRegistration',upload,checkMailController,verifyMailConroller);
// theaterOwnerRouter.get('/verifyemail',theaterOwnerRegistrationController);
// // theaterOwnerRouter.post('/userlogin'); // remaining
// export default theaterOwnerRouter;



import express from 'express';
import { theaterOwnermailVerifiactionController , theraterOwnerverifyOtpController , theaterOwnerAuthenticationController , theaterOwnerLoginController,theaterRegistrationController } from '../controller/theaterOwnerRegController.js';
import { upload } from '../middleware/multer.js';

const threaterOwnerRouter = express.Router();
threaterOwnerRouter.post("/theaterOwnermailVerifiaction",theaterOwnermailVerifiactionController);
threaterOwnerRouter.post("/theraterOwnerverifyOtp",theraterOwnerverifyOtpController);
threaterOwnerRouter.post("/theaterOwnerAuthentication",theaterOwnerAuthenticationController);
threaterOwnerRouter.post("/theaterOwnerLogin",theaterOwnerLoginController);
threaterOwnerRouter.post("/theaterRegistration", upload, theaterRegistrationController);

export default threaterOwnerRouter;
