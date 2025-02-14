import forgetEmale from "@/app/lb/ForgetEmale";
import { NextRequest, NextResponse } from "next/server";

  export async function POST(req:NextRequest){
    const reqst=await req.json()
    const {Emale}=reqst
 
    

    
    function generateCode(length: number): string {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
      }
      const passward=generateCode(6)
      await forgetEmale({userEmale:Emale,Passward: passward})

      
      
      

    return NextResponse.json(passward)
}