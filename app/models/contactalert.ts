function generateBookingHTML({bookingId, startingPoint, endingPoint, totalPrice}:any) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Details</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                text-align: center;
                color: #333;
            }
            p {
                font-size: 18px;
                color: #555;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New Booking Alert </h2>
            <p><strong>Booking ID:</strong> ${bookingId}</p>
            <p><strong>Starting Point:</strong> ${startingPoint}</p>
            <p><strong>Ending Point:</strong> ${endingPoint}</p>
            <p><strong>Total Price:</strong> $${totalPrice}</p>
        </div>
    </body>
    </html>`;
}
export default generateBookingHTML