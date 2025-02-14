
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import  bcryptjs from  "bcryptjs"
import { connectionstring } from "@/app/models/connectionstring";
import Sendemale from "@/app/models/sendEmail";
import usermodel from "@/app/models/usersignin";
import { cookies } from "next/headers";
import { ConfigResolutionError } from "sanity";





export  async function GET(){
 
    try{
        await mongoose.connect(connectionstring)
        const data=await usermodel.find()
        return NextResponse.json(data)


    }catch(err){
        console.log(err)
    }
}
export async function POST(req:NextRequest){
    try{
        const data=await mongoose.connect(connectionstring)
        const body:any=await req.json()
        const {Emale,Firstname, Lastname,passward}=body
        const findbyemale= await usermodel.findOne({Emale})
        if(findbyemale){
            return NextResponse.json({erorr:"User already exists"},{status:400})
        }
        else{
            // const salt = await bcryptjs.genSaltSync(10);
            const hashedpassward=await bcryptjs.hash(passward,10)
            const savedata=new usermodel({
                Firstname:Firstname,
                Lastname:Lastname,
                Emale:Emale,
                passward:hashedpassward
            })
            const savedUser=await savedata.save()
                
            console.log(savedUser)
            try{
                await Sendemale({useremaile:Emale,userID:savedUser._id,emaletype:"VERIFIED"})
                const  setuserdata=await cookies()
                setuserdata.set("userdata",JSON.stringify({id:savedUser._id}))
          
                
            }catch(err:any){
                console.log( err.message,"this error occur")

            }
            
           
            
            return NextResponse.json({ Message:"User Rejistered Sucessfully",saveduser:savedUser})
        }
    
        

    }catch(err:any){
        console.log(err.message)
    }


}

export async function DELETE(req:NextRequest){
    try{
        const data=await mongoose.connect(connectionstring)
        const body:any=await req.json()
        const {_id}=body
        await usermodel.deleteOne(_id)
        return NextResponse.json({status:400,sucess:true})
    }catch(err){
        console.log(err)
    }
    

}