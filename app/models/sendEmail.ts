
import  bcryptjs from  "bcryptjs"


import { html } from "./Html";
import usermodel from "./usersignin";



const nodemailer = require('nodemailer')

export default async function Sendemale({ useremaile, userID, emaletype }: any) {


  try {
    const verifytokenn = await bcryptjs.hash(String(userID), 5);
    const verifyToken=verifytokenn.slice(0, 10)

    if (emaletype === "VERIFIED") {
      await usermodel.findByIdAndUpdate(userID, {
        verifyToken: verifyToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // Gmail SMTP
        auth: {
          user: "uroobanawal74@gmail.com", // Replace with your Gmail address
          pass: "igbp ezus cpwr wqjs", // Use an App Password, NOT your Gmail password
        },
      });

      // Email options
      const mailoption = {
        from: '"Rent a Car" <uroobanawal74@gmail.com>', // sender address
        to: useremaile, // recipient's email address
        subject: "Account Verification", // Subject line
        text: `Please verify your account by using varification code `, // plain text body
        html: html(verifyToken), // HTML body
      };

      // Send email
      await transporter.sendMail(mailoption);
    
          }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
