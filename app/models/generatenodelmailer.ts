import generateBookingHTML from "./contactalert";
import { contacthtml } from "./contacthtml";

const nodemailer = require("nodemailer");

async function generatenodemilter({bookingId, startingPoint, endingPoint, totalPrice,Emale}:any){
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
              to: Emale, 
              subject: "Car Booking", 
              text: `Car booking`, 
              html: generateBookingHTML({bookingId, startingPoint, endingPoint, totalPrice}), 
            };
                // Send email
      await transporter.sendMail(mailoption);
    }catch(err:any){
        console.log("error occur")
    }
}
export default  generatenodemilter

