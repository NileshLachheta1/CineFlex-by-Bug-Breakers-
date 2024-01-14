import userModel from '../model/userModel.js';
import dotenv from 'dotenv';
import emailValidator from 'deep-email-validator';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

dotenv.config();
const customer_Secret_Key = process.env.CUSTOMER_SECRET_KEY;
var credential;
export const userRegistrationController = async (request, response) => {
    console.log("Credential : ", credential);
    try {
        var result = await userModel.create(credential);
        await result.save();
        console.log("Saved Data : ", result);
        if (result) {
            console.log("Registration successfull !!")
            var mailContent = `Congrats ${credential.username}, Your Cineplex Account has been successfully registered !`;
            emailFunction(mailContent, credential.email);
            response.status(201).json({ status: true });
        }
    }
    catch (err) {
        console.log("Error in user registration controller : ", err);
        response.status(500).json({ status: false });
        console.log('something went wrong', err);
    }

}

export const checkMailController = async (request, response, next) => {
    var { email } = request.body;
    async function isEmailValid(email) {
        return emailValidator.validate(email);
    }
    (async () => {
        const { valid, reason, validators } = await isEmailValid(email);
        console.log("valid : ", valid);
        if (valid) {
            console.log('Email is valid');
            const existinguser = await userModel.findOne({ email: email });
            if (existinguser) {
                console.log("User already exist !!")
            } else {
                next();
            }
        } else {
            console.log('Email is not valid. Reason:', validators[reason].reason);
            console.log(validators[reason].reason === "Timeout");
            if (validators[reason].reason == "Timeout") {
                isEmailValid(email);
            }
            // res.render("pages/register", { msg: 'Email is not Valid' });
        }
    })();
}

export const verifyMailConroller = async (request, response, next) => {
    const { email } = request.body;
    credential = request.body;
    console.log("Theater Owner Credential : ", credential);
    // var encodedUserData = encodeURIComponent(JSON.stringify(request.body));

    console.log("Email will be send on ", email);
    console.log("Email is valid now we can send verification link");
    var mailContent;
    if (request.body.userRoll == 'theaterOwner') {
        mailContent = "Hello " + email + ",<br>Welcome to Cineplex, click on the below <b>Link</b> to Verify Your Email.<br> <a href='http://localhost:3001/user/verifyemail'>Click Here to Verify</a>";
    } else {
        mailContent = "Hello " + email + ",<br>Welcome to Cineplex, click on the below <b>Link</b> to Verify Your Email.<br> <a href='http://localhost:3001/user/verifyemail'>Click Here to Verify</a>";
    }

    mailer(mailContent, email, () => {
        console.log("aya");
        // console.log("Token ",token);

        var expireTime = { expiresIn: '1d' };
        var token = jwt.sign(
            { _id: email },
            customer_Secret_Key,
            expireTime
        );
        console.log("Token ", token);
        if (token) {
            // next();
            console.log("JWT Token : ", token);
            console.log('Token Created Successfully now user will have to tap on the link to register itself !');
        } else {
            console.log('Error while Setting up jwt token !!');
            response.status(500).json({ message: "Error while generating token inside mailer at registration" });
        }
    });
}

const mailer = function (mailContent, email, setJwtCallback) {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vishnitin51@gmail.com',
                pass: 'nwey rgnh uorl mges'
            }
        });
        var mailOption = {
            from: 'vishnitin51@gmail.com',
            to: email,
            subject: "Verification Mail By Cineplex",
            html: mailContent
        };
        transporter.sendMail(mailOption, (err, info) => {
            if (err)
                console.log("Error while sending email in mailer() : " + err);
            else {
                console.log("Mail sent successfully : ", info);
                setJwtCallback();
            }
        });

    } catch (error) {
        console.log("Error in Mailer Function !");
    }
}

export const emailFunction = function (mailContent, email) {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vishnitin51@gmail.com',
                pass: 'nwey rgnh uorl mges'
            }
        });
        var mailOption = {
            from: 'vishnitin51@gmail.com',
            to: email,
            subject: "Verification Mail By Cineplex",
            html: mailContent
        };
        transporter.sendMail(mailOption, (err, info) => {
            if (err)
                console.log("Error while sending email in mailer() : " + err);
            else {
                console.log("Mail sent successfully : ");
            }
        });
    } catch (error) {
        console.log("Error in Mailer Function !");
    }
}

export const userLoginController = async (request, response) => {
    try {
        const { email, password } = request.body;
        var expireTime = { expiresIn: '1d' };
        var token = jwt.sign(
            { _id: email },
            customer_Secret_Key,
            expireTime
        );

        if (!token) {
            console.log("Error while setting up token !!");
        } else {
            var userData = await userModel.findOne({ email: email });
            if (userData) {
                console.log("Profile Matched : ", userData);
                response.status(201).json({ useEmail: email, token: token });
            } else {
                console.log("User Not Exist !!");
            }
        }
    } catch (error) {
        console.log("Error while Login");
    }
}

export const authentication = async (request, response, next) => {
    var token = request.param("candidateToken");
    if (!token) {
        response.status(203).json({ message: "Token not found" });
    } else {
        jwt.verify(token, secret_key, (err, payload) => {
            if (err) {
                console.log("Error While Authenticating User");
                response.status(203).json({ message: "Error while verifying Token" });
            } else {
                request.payload = payload;
                next();
            }
        });
    }

}

