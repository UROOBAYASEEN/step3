import contacthtmls2 from "./contactnodehtml";
import { generatePasswordEmail } from "./forgethtml";



const nodemailer = require("nodemailer");

  export async function forgetEmale({userEmale,Passward}:any){
    try{
        
    const transporter = nodemailer.createTransport({
        service: "gmail", // Gmail SMTP
        auth: {
          user: "uroobanawal74@gmail.com", 
          pass: "igbp ezus cpwr wqjs", 
        },
      });
       const mailoption = {
              from: '"Rent a Car" <uroobanawal74@gmail.com>',
              to: userEmale, 
              subject: "Car Booking", 
              text: `Car booking`, 
              html: generatePasswordEmail(Passward)
              
            };
                // Send email
      await transporter.sendMail(mailoption);
    }catch(err:any){
        console.log("error occur")
    }
}
export default  forgetEmale

