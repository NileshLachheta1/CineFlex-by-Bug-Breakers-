import nodemailer from 'nodemailer';
export const mailer=function(email,message,callback){
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'vishnitin51@gmail.com',
            pass: 'nwey rgnh uorl mges'
        },
        secure: true,
    });
    var mailOption = {
        from: "vishnitin51@gmail.com",
        to:email,
        subject:"Verification Mail By Cineplex",
        html:message,
    };
    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log('error while ');
        }  
        else{
            console.log('email sent');
            callback(info);
        }
    });
}

