
import { connectionstring } from "@/app/models/connectionstring";
import usermodel, { bookingmodel } from "@/app/models/usersignin";
// import { usermodel } from "@/app/models/usersignin";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    // Extract the user ID from the request URL
    const url = new URL(req.url);
    const userId = url.pathname.split("/").pop(); // Assumes the userid is in the last segment of the path

    if (!userId) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

 await mongoose.connect(connectionstring)
const data=await bookingmodel.findOneAndDelete({_id:userId})
    
return NextResponse.json({status:200,result:data})
   
    
}
catch(err){
    console.log(err)
}
}
export async function PUT(req:NextRequest){
    try {
        // Extract the user ID from the request URL
        const url = new URL(req.url);
        const userId = url.pathname.split("/").pop(); // Assumes the userid is in the last segment of the path
    
        if (!userId) {
          return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
        }

        const payloat=await req.json()
        console.log("this is payload",payloat)
        const data=await bookingmodel.findOneAndUpdate({_id:userId },payloat)
return NextResponse.json({status:data})

}catch(err){
    console.log(err)
}
}