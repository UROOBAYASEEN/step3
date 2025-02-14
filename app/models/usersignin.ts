import mongoose from "mongoose";
const userdataset=new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    passward:String,
    description:String,
    Profilepic:String,
    location:String,
    Emale:String,
    posts:[String],
    savepost:[String],
    coverphoto:String,
    
    Isverified:{type:Boolean,default:false},
    IsAdmin:{type:Boolean,default:false},
    ForgotPAsswardToken:String,
    FOrgotPAsswardTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})
  const usermodel=mongoose.models?.newblogusers|| mongoose.model("newblogusers",userdataset)
  export default usermodel
 
  const carbookingdata=new mongoose.Schema({

    orderID:String,
    startingplace:String,
    destination:String,
    Totalprice:Number,
    orderposition:{type:Boolean,default:false},
    carid:String

  })
  export const bookingmodel=mongoose.models?.BookingOrders|| mongoose.model("BookingOrders",carbookingdata)