export const contacthtml=({name,Email,Phonenumber,message}:any)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Information</title>
    <style>
        /* Reset some default styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .contact-info-container {
            width: 100%;
            max-width: 600px;
            padding: 30px;
            background-color: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
        }

        h1 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 30px;
        }

        .info-item {
            margin-bottom: 20px;
        }

        .info-item h2 {
            font-size: 1.5rem;
            color: #007BFF;
            margin-bottom: 8px;
        }

        .info-item p {
            font-size: 1.1rem;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="contact-info-container">
        <h1>Contact Information</h1>
        <div class="info-item">
            <h2>Name:</h2>
            <p>${name}</p>
        </div>
        <div class="info-item">
            <h2>Email:</h2>
            <p>${Email}</p>
        </div>
        <div class="info-item">
            <h2>Phone Number:</h2>
            <p>${Phonenumber}</p>
        </div>
        <div class="info-item">
            <h2>Message:</h2>
            <p>${message}</p>
        </div>
    </div>
</body>
</html>
`
}