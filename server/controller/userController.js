// import userModel from '../model/userModel.js';
// import dotenv from 'dotenv';
// import emailValidator from 'deep-email-validator';
// import nodemailer from 'nodemailer';
// import jwt from 'jsonwebtoken';

// dotenv.config();
// const customer_Secret_Key = process.env.CUSTOMER_SECRET_KEY;
// var credential;
// export const userRegistrationController = async (request, response) => {
//     console.log("Credential : ", credential);
//     try {
//         var result = await userModel.create(credential);
//         await result.save();
//         console.log("Saved Data : ", result);
//         if (result) {
//             console.log("Registration successfull !!")
//             var mailContent = `Congrats ${credential.username}, Your Cineplex Account has been successfully registered !`;
//             emailFunction(mailContent, credential.email);
//             response.status(201).json({ status: true });
//         }
//     }
//     catch (err) {
//         console.log("Error in user registration controller : ", err);
//         response.status(500).json({ status: false });
//         console.log('something went wrong', err);
//     }

// }

// export const checkMailController = async (request, response, next) => {
//     var { email } = request.body;
//     async function isEmailValid(email) {
//         return emailValidator.validate(email);
//     }
//     (async () => {
//         const { valid, reason, validators } = await isEmailValid(email);
//         console.log("valid : ", valid);
//         if (valid) {
//             console.log('Email is valid');
//             const existinguser = await userModel.findOne({ email: email });
//             if (existinguser) {
//                 console.log("User already exist !!")
//             } else {
//                 next();
//             }
//         } else {
//             console.log('Email is not valid. Reason:', validators[reason].reason);
//             console.log(validators[reason].reason === "Timeout");
//             if (validators[reason].reason == "Timeout") {
//                 isEmailValid(email);
//             }
//             // res.render("pages/register", { msg: 'Email is not Valid' });
//         }
//     })();
// }

// export const verifyMailConroller = async (request, response, next) => {
//     const { email } = request.body;
//     credential = request.body;
//     console.log("Theater Owner Credential : ", credential);
//     // var encodedUserData = encodeURIComponent(JSON.stringify(request.body));

//     console.log("Email will be send on ", email);
//     console.log("Email is valid now we can send verification link");
//     var mailContent;
//     if (request.body.userRoll == 'theaterOwner') {
//         mailContent = "Hello " + email + ",<br>Welcome to Cineplex, click on the below <b>Link</b> to Verify Your Email.<br> <a href='http://localhost:3001/user/verifyemail'>Click Here to Verify</a>";
//     } else {
//         mailContent = "Hello " + email + ",<br>Welcome to Cineplex, click on the below <b>Link</b> to Verify Your Email.<br> <a href='http://localhost:3001/user/verifyemail'>Click Here to Verify</a>";
//     }

//     mailer(mailContent, email, () => {
//         console.log("aya");
//         // console.log("Token ",token);

//         var expireTime = { expiresIn: '1d' };
//         var token = jwt.sign(
//             { _id: email },
//             customer_Secret_Key,
//             expireTime
//         );
//         console.log("Token ", token);
//         if (token) {
//             // next();
//             console.log("JWT Token : ", token);
//             console.log('Token Created Successfully now user will have to tap on the link to register itself !');
//         } else {
//             console.log('Error while Setting up jwt token !!');
//             response.status(500).json({ message: "Error while generating token inside mailer at registration" });
//         }
//     });
// }

// const mailer = function (mailContent, email, setJwtCallback) {
//     try {
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'vishnitin51@gmail.com',
//                 pass: 'nwey rgnh uorl mges'
//             }
//         });
//         var mailOption = {
//             from: 'vishnitin51@gmail.com',
//             to: email,
//             subject: "Verification Mail By Cineplex",
//             html: mailContent
//         };
//         transporter.sendMail(mailOption, (err, info) => {
//             if (err)
//                 console.log("Error while sending email in mailer() : " + err);
//             else {
//                 console.log("Mail sent successfully : ", info);
//                 setJwtCallback();
//             }
//         });

//     } catch (error) {
//         console.log("Error in Mailer Function !");
//     }
// }

// export const emailFunction = function (mailContent, email) {
//     try {
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'vishnitin51@gmail.com',
//                 pass: 'nwey rgnh uorl mges'
//             }
//         });
//         var mailOption = {
//             from: 'vishnitin51@gmail.com',
//             to: email,
//             subject: "Verification Mail By Cineplex",
//             html: mailContent
//         };
//         transporter.sendMail(mailOption, (err, info) => {
//             if (err)
//                 console.log("Error while sending email in mailer() : " + err);
//             else {
//                 console.log("Mail sent successfully : ");
//             }
//         });
//     } catch (error) {
//         console.log("Error in Mailer Function !");
//     }
// }

// export const userLoginController = async (request, response) => {
//     try {
//         const { email, password } = request.body;
//         var expireTime = { expiresIn: '1d' };
//         var token = jwt.sign(
//             { _id: email },
//             customer_Secret_Key,
//             expireTime
//         );

//         if (!token) {
//             console.log("Error while setting up token !!");
//         } else {
//             var userData = await userModel.findOne({ email: email });
//             if (userData) {
//                 console.log("Profile Matched : ", userData);
//                 response.status(201).json({ useEmail: email, token: token });
//             } else {
//                 console.log("User Not Exist !!");
//             }
//         }
//     } catch (error) {
//         console.log("Error while Login");
//     }
// }

// export const authentication = async (request, response, next) => {
//     var token = request.param("candidateToken");
//     if (!token) {
//         response.status(203).json({ message: "Token not found" });
//     } else {
//         jwt.verify(token, secret_key, (err, payload) => {
//             if (err) {
//                 console.log("Error While Authenticating User");
//                 response.status(203).json({ message: "Error while verifying Token" });
//             } else {
//                 request.payload = payload;
//                 next();
//             }
//         });
//     }

// }

// .......................................................................................AbortController

import randomstring from "randomstring";
import { mailer } from "../middleware/mailer.js";
import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import {nanoid} from 'nanoid'
import { generateToken, verifyToken } from '../middleware/jwt.js';
import { response } from "express";
dotenv.config();
const secretKey = process.env.CUSTOMER_SECRET_KEY;
console.log("secretKey---> ", secretKey);
var otp;


export const emailVerifiactionController = async (request, response) => {
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





export const verifyOtpController = async (request, response) => {
    console.log('inside verifyOtpController');
    console.log('req', request.body);

    const { data, otpString } = request.body;

    if (otpString == request.body.otpString) {
        try {
            // Hash the password before storing it
            data.password = await bcrypt.hash(data.password, 10);

            // Generate referral code
            data.referalCode = await nanoid(8);

            // Create and save the user
            const result = await userModel.create(data);

            console.log('result in verifyOtpController -->', result);

            // Generate and send the JWT token
            const token = generateToken(result, secretKey);
            console.log('Generated Token:', token);

            response.status(201).json({ userData: result, jwtToken: token });
        } catch (error) {
            console.log(error);
            // Handle different types of errors appropriately
            if (error.name === 'ValidationError') {
                response.status(400).json({ message: 'Validation error in user data' });
            } else {
                response.status(500).json({ message: 'Internal server error when adding data' });
            }
        }
    } else {
        response.status(210).json({ message: 'Otp not matched' });
    }
};




export const userauthenticationController = async (request, response) => {
    try{
    console.log('inside userauthenticationController');
    const token = request.body.customerToken;
    console.log("token--->", token);
    
    if (!token) {
        response.status(203).json({ message: "Token not found" });
    } else {
        var payload = await verifyToken(token, secretKey);
        console.log('payload user controll-->', payload);
        response.status(201).json(payload.userData);
    }
}catch(err){
console.log("Error while user authentication Controller",err);
response.status(203).json({ message: 'Token Not verify please login then try to access' });
}
};


export const userLoginController = async (request, response) => {
    // Assuming your request body has properties 'email' and 'password'
    const { email, password } = request.body;

    console.log("email : ",email)
    console.log("password : ",password)

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
                response.status(201).json({ userData: user, jwtToken: token });
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

export const userLogoutController=((request,response)=>{
     response.clearCookie('userToken');
     response.status(201).json({message:"Successfully Logout"});
})
