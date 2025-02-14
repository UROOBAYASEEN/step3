const bookingaCar=({totalprice,startingpoint,endpoint}:any)=>{

    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .user-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
        }
        .details {
            text-align: left;
            margin-top: 20px;
        }
        .details p {
            font-size: 16px;
            color: #333;
            margin: 8px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
       
    
        <h2>Car Booking Confirmation</h2>
        <div class="details">
            <p><strong>Total Price:</strong> ${totalprice}</p>
            <p><strong>Starting Place:</strong> ${startingpoint}</p>
            <p><strong>Destination:</strong> ${endpoint}</p>
        </div>
        <div class="footer">
            <p>Thank you for booking with us!</p>
            <p>Enjoy your travel!</p>
        </div>
    </div>
</body>
</html>
`
}
export default bookingaCar