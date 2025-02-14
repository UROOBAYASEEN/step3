
import  bcryptjs from  "bcryptjs"


import { html } from "./Html";
import usermodel from "./usersignin";
import bookingaCar from "./carbookinghtml";



const nodemailer = require('nodemailer')

export default async function Sendemaleforbooking({ useremaile, startingpoint,Endingpoint,totalprice}: any) {


  
      // Create transporter
      const transporter = nodemailer.createTransport({
        service: "gmail", // Gmail SMTP
        auth: {
          user: "uroobanawal74@gmail.com", 
          pass: "igbp ezus cpwr wqjs", 
          
        },
      });

      // Email options
      const mailoption = {
        from: '"Car Booking" <uroobanawal74@gmail.com>',
        to: useremaile, 
        subject: "Booking  Confirm", 
        text: `Enjoy your Travel`, 
        html: bookingaCar({totalprice:totalprice,startingpoint: startingpoint,endpoint:Endingpoint}), 
      };
      await transporter.sendMail(mailoption)

      
      
          
 
      
}
