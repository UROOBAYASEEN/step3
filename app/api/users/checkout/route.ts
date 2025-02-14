// import Sendemale from "@/app/models/sendEmail";
// import usermodel from "@/app/models/usersignin";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,);

// export async function POST(req: NextRequest) {
//   try {
//     const { items } = await req.json();
     
    
    

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: items.map((item: any) => ({
//         price_data: {
//           currency: "usd",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100, // Convert to cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
//     });
//     const findbyid=await usermodel.findOne({_id:items[0].myid})
//     const startingpoint=items[0].staringpoint
//     const Endpoint=items[0].Endpoint
//     const totalpoint=items[0].price
//     console.log("send Email to this id ",findbyid)
//     console.log(findbyid.Emale)
//   const check=findbyid.Emale=="aroobanawal19@gmail.com"
//   console.log(check)
  
//     try{
//       await Sendemale({ useremaile:findbyid.Emale,startingpoint:startingpoint,Endingpoint:Endpoint,totalprice:totalpoint})
//     console.log("email is Send ")
//     }
//     catch(err:any){
//       console.log("this errr iccur to sending Email",err.message)
//     }
    
//     // const data=await usermodel.findOne({_id:userdata})
//     // console.log(data)

//     return NextResponse.json({ url: session.url });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
//   }
// }

// import Sendemale from "@/app/models/sendEmail";
// import usermodel from "@/app/models/usersignin";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(req: NextRequest) {
//   try {
//     const { items } = await req.json();
    
//     if (!items || items.length === 0) {
//       return NextResponse.json({ error: "No items found" }, { status: 400 });
//     }

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: items.map((item: any) => ({
//         price_data: {
//           currency: "usd",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100, // Convert to cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
//     });

//     // Find user by ID
//     const findbyid = await usermodel.findOne({ _id: items[0].myid });

//     if (!findbyid) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     const startingpoint = items[0].startingpoint; // Fixed typo
//     const Endpoint = items[0].Endpoint;
//     const totalpoint = items[0].price;

//     console.log("Send email to:", findbyid.email); // Ensure this field exists

//     const check = findbyid.email === "aroobanawal19@gmail.com";
//     console.log("Check Email:", check);

//     try {
//       await Sendemale({
//         useremaile: findbyid.email,
//         startingpoint: startingpoint,
//         Endingpoint: Endpoint,
//         totalprice: totalpoint,
//       });
//       console.log("Email sent successfully");
//     } catch (err: any) {
//       console.error("Error sending email:", err.message);
//     }

//     return NextResponse.json({ url: session.url });
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
//   }
// }


import generatenodemilter from "@/app/models/generatenodelmailer";
import Sendemaleforbooking from "@/app/models/SendEmailforbooking";
import usermodel, { bookingmodel } from "@/app/models/usersignin";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  interface bookingoder{
    orderID:string,
    startingplace:string,
    destination:string,
    Totalprice:number,
    orderposition:boolean
    

    
  }
  try {
    const { items } = await req.json();
    
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items found" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    });

    const findbyid = await usermodel.findOne({ _id: items[0].myid });

    if (!findbyid) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const startingpoint = items[0].staringpoint; 
    const Endpoint = items[0].Endpoint;
    const totalpoint = items[0].price;

    console.log("send Email to this id ", findbyid);
    console.log(findbyid.Emale);

    const check = findbyid.Emale == "aroobanawal19@gmail.com";
    console.log(check);

    try {
      // await Sendemale({
      //   useremaile: findbyid.Emale,
      //   startingpoint: startingpoint,
      //   Endingpoint: Endpoint,
      //   totalprice: totalpoint,
      // });
      await Sendemaleforbooking({
        useremaile: findbyid.Emale,
        startingpoint:startingpoint,
        Endingpoint:Endpoint,
        totalprice: totalpoint,
      });
      console.log(typeof totalpoint)
      const savebookingdata:bookingoder={
        orderID:findbyid._id,
        startingplace:startingpoint,
        destination:Endpoint,
        Totalprice:totalpoint,
        orderposition:false

      }
      const savebookingdatatoDb= new  bookingmodel(savebookingdata)
      const savebooking=await savebookingdatatoDb.save()
      console.log("the booking data is Here",savebooking)
      console.log(findbyid.Emale)
      console.log(startingpoint)
      console.log(Endpoint)
     console.log(totalpoint)
      console.log("email is Send ");
      await  generatenodemilter({bookingId:savebooking._id,startingPoint:startingpoint,endingPoint:Endpoint,totalPrice:totalpoint,Emale:"uroobanawal74@gmail.com"})
    
    } catch (err: any) {
      console.log("this errr iccur to sending Email", err.message);
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}
