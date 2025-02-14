export const html=(sendcode:any)=>{



    return `<!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Email Verification</title>
   <style>
     body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f9;
       margin: 0;
       padding: 0;
     }
     .email-container {
       max-width: 600px;
       margin: 20px auto;
       background-color: #ffffff;
       border-radius: 8px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
       overflow: hidden;
     }
     .header {
       background-color: #4caf50;
       color: white;
       text-align: center;
       padding: 20px;
     }
     .header h1 {
       margin: 0;
       font-size: 24px;
     }
     .content {
       padding: 20px;
       text-align: center;
       color: #333;
     }
     .content p {
       font-size: 16px;
       line-height: 1.5;
     }
     .footer {
       background-color: #f4f4f9;
       color: #888;
       text-align: center;
       padding: 10px;
       font-size: 12px;
     }
     .footer a {
       color: #4caf50;
       text-decoration: none;
     }
     .footer a:hover {
       text-decoration: underline;
     }
   </style>
 </head>
 <body>
   <div class="email-container">
     <div class="header">
       <h1>Verify Your Email Address</h1>
       <p>Thanks For join Us</p>
       
     </div>
     <div class="content">
       <p>Hello,</p>
       <p>Thank you for signing up. Use the verification code below to complete your registration:</p>
       <p style="font-size: 24px; font-weight: bold; color: #4caf50;">${sendcode}</p>
       <p>If you did not sign up for this account, you can safely ignore this email.</p>
     </div>
     <div class="footer">
       <p>If you have any issues, please contact us at <a href="mailto:uroobanawal74@gmail.com">support@example.com</a>.</p>
       <p>Thank you, <br> The Example Team</p>
     </div>
   </div>
 </body>
 </html>
 `}