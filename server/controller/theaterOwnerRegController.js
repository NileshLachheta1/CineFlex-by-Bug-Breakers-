// import  theaterOwnerModel from '../model/theaterOwnerModel.js';
// import dotenv from 'dotenv';
// import {emailFunction} from '../controller/userController.js'
// import emailValidator from 'deep-email-validator';
// import nodemailer from 'nodemailer';
// import jwt from 'jsonwebtoken';

// dotenv.config();
// const theater_Owner_Secret_Key = process.env.THEATER_OWNER_SECRET_KEY;
// var credential;
// export const theaterOwnerRegistrationController = async (request, response) => {
//     console.log("Credential : ",credential);
//     try {
//         var result = await theaterOwnerModel.create(credential);
//         await result.save();
//         console.log("Saved Data : ", result);
//         if (result) {
//             console.log("Theater Owner Registration successfull !!")
//             var mailContent = `Congrats ${credential.theaterName}, Your Cineplex Theater Owner Account has been successfully registered !`;
//             emailFunction(mailContent,credential.theaterEmail);
//             // response.redirect('http://localhost:3000/theaterOwner');
//             var message = "Your Registration Application has been sent to the Admin,Please wait for the Admin Approval."
//             response.redirect(`http://localhost:3000/login?message=${message}`);
//             // response.redirect('http://localhost:3000/theaterRegistrationForm');
//         }
//     }
//     catch (err) {
//         console.log("Error in user registration controller : ", err);
//         response.status(500).json({ status: false });
//         console.log('something went wrong', err);
//     }
// }

// export const checkMailController = async (request,response,next)=>{
//     var email= request.body.theaterEmail;
//     console.log("Theater Owner Email : ",email);
//     console.log("Files : ",request.files);

//     async function isEmailValid(email){
//         return emailValidator.validate(email);
//     }
//     (async () => {
//         const { valid, reason, validators } = await isEmailValid(email);
//         console.log("valid : ",valid);
//         if (valid) {
//             console.log('Email is valid');
//             const existinguser = await theaterOwnerModel.findOne({ email: email });
//             if (existinguser) {
//                 console.log("theater owner already exist !!")
//             }else{
//                 next();
//             }
//         } else {
//             console.log('Email is not valid. Reason:', validators[reason].reason);
//             console.log(validators[reason].reason === "Timeout");
//             if(validators[reason].reason=="Timeout"){
//                 isEmailValid(email);
//             }
//             // res.render("pages/register", { msg: 'Email is not Valid' });
//         }
//     })();
// }

// export const verifyMailConroller = async(request,response,next)=>{
//     const email = request.body.theaterEmail; 
//     credential = request.body; 
//     console.log("details : ",request.body);
//     var  brandLogo = request.files['brandLogo'][0].originalname;
//     var TheaterImage = request.files['TheaterImage'][0].originalname;
//     var theaterLicenceImage = request.files['theaterLicenceImage'][0].originalname;
//     var files = {
//          brandLogo: brandLogo,
//          TheaterImage: TheaterImage,
//          theaterLicenceImage: theaterLicenceImage,
//     }
//     credential = {
//      ...credential,
//      ...files
//     };

//     console.log("Email will be send on ",email);
//     console.log("Email is valid now we can send verification link");
//     var mailContent = `Hello  ${email},<br>Welcome to Cineplex, click on the below <b>Link</b> to Verify Your Email to create your Theater Owner Account.<br> <a href='http://localhost:3001/theaterOwner/verifyemail?email = ${email}'>Click Here to Verify</a>`;
//     mailer(mailContent,email,()=>{
//         // console.log("Token ",token);
//         var expireTime = {expiresIn : '1d'};
//         var token = jwt.sign(
//             {_id: email},
//             theater_Owner_Secret_Key,
//             expireTime
//         );
//         console.log("Token ",token);
//         if(token){
//             // next();
//             console.log("JWT Token : ",token);
//             console.log('Token Created Successfully now user will have to tap on the link to register itself !');
//             response.end();

//         }else{
//             console.log('Error while Setting up jwt token !!');
//             response.status(500).json({message:"Error while generating token inside mailer at registration"});
//         }
//     });
// }

// const mailer = function(mailContent,email,setJwtCallback){
//     try{
//         var transporter = nodemailer.createTransport({
//             service:'gmail',
//             auth:{
//                 user : 'vishnitin51@gmail.com',
//                 pass : 'nwey rgnh uorl mges'
//             }
//         });
//         var mailOption = {
//             from: 'vishnitin51@gmail.com',
//             to:email,
//             subject:"Verification Mail By Cineplex",
//             html:mailContent
//         };
//         transporter.sendMail(mailOption,(err,info)=>{
//             if(err)
//                 console.log("Error while sending email in mailer() : "+err);
//             else{
//                 console.log("Mail sent successfully : ",info);
//                 setJwtCallback();
//             }
//         });

//     }catch(error){
//         console.log("Error in Mailer Function !");
//     }
// }


// ..................................................................AbortController............
import randomstring from "randomstring";
import { mailer } from "../middleware/mailer.js";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { generateToken, verifyToken } from '../middleware/jwt.js';
import theaterOwnerModel from "../model/theaterOwnerModel.js";
dotenv.config();
const secretKey = process.env.THEATER_OWNER_SECRET_KEY;
var otp;


export const theaterOwnermailVerifiactionController = async (request, response) => {
    try {
        console.log('data : ', request.body.email);
        const existingUser = await userModel.findOne({ email: request.body.email });
        if (existingUser) {
            console.log("exist");
            response.status(250).json({ message: 'Email already exists' });
        } else {
            console.log('data : ', request.body);
            otp = randomstring.generate({
                length: 4,
                charset: 'numeric',
            });
            console.log("otp of user ", otp);
            var message = `Hello <b>${request.body.username}</b><br>Email verification for THeater Owner<br>Your One Time Password is ${otp} enter this otp and Verify Email<br>Thank You 😊`;
            mailer(request.body.email, message, (info) => {
                if (info) {
                    console.log('otp sent sucesfully');
                    response.status(201).json({ message: 'Otp send sucessfully' });
                }
                else {
                    response.status(208).json({ message: 'email not sent' });
                }
            });
        }
    } catch (error) {
        console.log("error", error);
        response.status(500).json({ message: 'Internal server error' });
    }
};





export const theraterOwnerverifyOtpController = async (request, response) => {
    console.log('inside  verifyOtpController');
    console.log('req', request.body);
    if (otp == request.body.otpString) {
        try {
            const data = request.body.data;
            console.log('body', request.body);
            data.password = await bcrypt.hash(data.password, 10);
            var result = await userModel.create(data);
            await result.save();
            console.log(result);
            const token = generateToken(result, secretKey);
            console.log('Generated Token:', token);
            response.status(201).json({ theaterOwnerData: result, jwtToken: token });
        } catch (error) {
            console.log(error);
            response.status(500).json({ message: 'internal server error when adding Data' });
        }
    } else {
        response.status(210).json({ message: 'Otp not matched' });
    }

};



export const theaterOwnerAuthenticationController = async (request, response) => {
    console.log('inside  userauthenticationController');
    const token = request.body.customerToken;
    console.log(token);
    if (!token)
        response.status(203).json({ message: "Token not found" });
    else {
        const payload = await verifyToken(token, secretKey)
        console.log('payload', payload);
        response.status(201).json(payload.theaterOwnerData);
    }
}


export const theaterOwnerLoginController = async (request, response) => {
// Assuming your request body has properties 'email' and 'password'
const { email, password } = request.body;

try {
  const payload = {
    userId: null, 
    username: null,
    email: null,
    roll: null,
  };


  const user = await userModel.findOne({ email: email });

  if (user) {
    const pass = await bcrypt.compare(password, user.password);

    if (pass) {
      // Successfully logged in
      payload.userId = user._id.toString();
      payload.username = user.username;
      payload.email = user.email;
      payload.roll = user.roll;

      const token = generateToken(user, secretKey);
      console.log('Generated Token:', token);
      response.status(201).json({ theaterOwnerData:user, jwtToken: token });
} else {
      response.status(203).json({ message: 'Password not matched' });
    }
  } else {
    response.status(202).json({ message: 'Email not matched' });
  }
} catch (error) {
  console.log('Error:', error);
  response.status(500).json({ message: 'Internal server error' });
}

}

export const theaterRegistrationController = async (request, response) => {
    try {
        const email = request.body.theaterEmail; 
        var theaterCredential = request.body; 
        console.log("details : ",theaterCredential);
        const  brandLogo = request.files['brandLogo'][0].originalname;
        console.log("brandLogo",brandLogo);
        const TheaterImage = request.files['TheaterImage'][0].originalname;
        console.log("TheaterImage",TheaterImage);
        const theaterLicenceImage = request.files['theaterLicenceImage'][0].originalname;
        console.log("theaterLicenceImage",theaterLicenceImage);
        const files = {
             brandLogo: brandLogo,
             TheaterImage: TheaterImage,
             theaterLicenceImage: theaterLicenceImage,
        }
        theaterCredential = {...theaterCredential,...files};        
        const result = await theaterOwnerModel.create(theaterCredential);
        console.log("Saved Data : ", result);
        console.log("Theater Owner Registration successfull !!")
        response.status(201).json({ message : 'Threater registeration successfully' });
    }
    catch (err) {
        console.log("Error in theater registration controller : ", err);
        response.status(500).json({ message : ' Error in Threater registeration' });
        console.log('something went wrong', err);
    }
}