import { connectionstring } from "@/app/models/connectionstring";
import { bookingmodel } from "@/app/models/usersignin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

 export async function  GET(){
   await   mongoose.connect(connectionstring)
   const data=await  bookingmodel.find()
   console.log(data)



    return NextResponse.json(data)
}