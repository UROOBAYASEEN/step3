// import { connectionstring } from "@/app/lib/mongoconnection"
// import { usermodel } from "@/app/lib/scheema"
// import mongoose from "mongoose"
// import { NextRequest, NextResponse } from "next/server"

// export async function PUT(req:NextRequest,res:any){
//     const userids=res.params.userid

//     const filter={_id:userids}
//     console.log(filter)
//     const payload= await req.json()
//     console.log(payload)
//     await mongoose.connect(connectionstring)
//     const data=await usermodel.findOneAndUpdate(filter,payload)




// return NextResponse.json({data,sucess:true})

// }
import { connectionstring } from "@/app/models/connectionstring";
import usermodel from "@/app/models/usersignin";
// import { usermodel } from "@/app/models/usersignin";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    // Extract the user ID from the request URL
    const url = new URL(req.url);
    const userId = url.pathname.split("/").pop(); // Assumes the userid is in the last segment of the path

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    const filter = { _id: userId };
    console.log("Filter:", filter);

    const payload = await req.json();
    console.log("Payload:", payload);

    // Connect to MongoDB (reuse connection if already established)
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionstring);
    }

    // Update user in the database
    const data = await usermodel.findOneAndUpdate(filter, payload, { new: true });

    if (!data) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error:any) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


