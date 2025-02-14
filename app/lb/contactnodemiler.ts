import contacthtmls2 from "./contactnodehtml";



const nodemailer = require("nodemailer");

async function generatenodemilter123({fullName,emale,phonenumber,messgae}:any){
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
              to: "aroobanawal19@gmail.com", 
              subject: "Car Booking", 
              text: `Car booking`, 
              html: contacthtmls2({fullName:fullName,email:emale, phoneNumber:phonenumber, message:messgae}), 
            };
                // Send email
      await transporter.sendMail(mailoption);
    }catch(err:any){
        console.log("error occur")
    }
}
export default  generatenodemilter123

