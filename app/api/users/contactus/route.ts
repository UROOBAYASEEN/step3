import generatenodemilter123 from "@/app/lb/contactnodemiler";
import generatenodemilter from "@/app/models/generatenodelmailer";
import { NextResponse } from "next/server";

export async function POST(req:any){
    const data=await req.json()
    console.log(data)
    const {fullName,emale,phonenumber,messgae}=data

await generatenodemilter123({fullName,emale,phonenumber,messgae})

    
return NextResponse.json({status:400,sucess:true})

}