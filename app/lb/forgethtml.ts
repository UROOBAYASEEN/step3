   export function generatePasswordEmail(newPassword: string): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Password</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 500px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .password {
            font-size: 18px;
            font-weight: bold;
            color: #007bff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Your New Password</h2>
          <p>Hello,</p>
          <p>Your new password is:</p>
          <p class="password">${newPassword}</p>
          <p>Please change your password after logging in for security reasons.</p>
          <p>Best Regards,<br> Your Company</p>
        </div>
      </body>
      </html>
    `;
  }
  