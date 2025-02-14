import { contacthtml } from "./contacthtml";

const nodemailer = require("nodemailer");

async function SendingcontactEmail({name,Email,Phonenumber,message}:any){
    try{
        
    const transporter = nodemailer.createTransport({
        service: "gmail", // Gmail SMTP
        auth: {
          user: "uroobanawal74@gmail.com", // Replace with your Gmail address
          pass: "igbp ezus cpwr wqjs", // Use an App Password, NOT your Gmail password
        },
      });
       const mailoption = {
              from: '"Rent a Car" <uroobanawal74@gmail.com>', // sender address
              to: "uroobanawal74@gmail.com", // recipient's email address
              subject: "Account Verification", // Subject line
              text: `Please verify your account by using varification code `, // plain text body
              html: contacthtml({name,Email,Phonenumber,message}), // HTML body
            };
                // Send email
      await transporter.sendMail(mailoption);
    }catch(err:any){
        console.log("error occur")
    }
}
export default SendingcontactEmail

