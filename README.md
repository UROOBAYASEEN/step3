<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
Rent-A-Car Website

Description

This project is a responsive and pixel-perfect Rent-A-Car website that provides a seamless user experience. The platform allows users to browse available cars, authenticate securely, and place rental orders efficiently. It uses modern technologies like Sanity, Tailwind CSS, MongoDB, and Stripe to ensure scalability and reliability.

Features

Product Management: Car rental data is managed and fetched using Sanity.

Responsive Design: Built with Tailwind CSS to ensure a flawless user interface across all devices.

Pixel-Perfect Design: Emphasis on precise and visually appealing UI.

User Authentication: Secure authentication for user accounts using MongoDB.

Order Management:

Orders and user data are saved in Sanity.

Shipment details are generated with a unique shipment ID.

Payment Integration: Payments are processed using Stripe.
Technologies Used

Frontend:

Next.js

Tailwind CSS

ShadCN Components

Sonner Components

Backend:

MongoDB

CMS:

Sanity

Payment Gateway:

Stripe
Configure environment variables:

Create a .env file.

Add MongoDB, Sanity, and Stripe credentials.
Usage

Start the development server:

npm run dev

Open your browser and navigate to:

http://localhost:3000

Explore the available cars, authenticate, and place rental orders.

API Workflow

Fetch Products:

Data for cars is fetched from Sanity.

User Authentication:

User credentials are securely stored in MongoDB.

Order Placement:

Payment details are processed using Stripe.

Order and shipment data are saved in Sanity with a generated shipment ID.
Future Enhancements

Add more payment options.

Implement a review system for cars.

Include analytics and reporting for admin users.
Thanks to the developers of Sanity, Tailwind CSS, Stripe, and other technologies used in this project.