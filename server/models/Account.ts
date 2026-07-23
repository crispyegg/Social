


import mongoose, { Schema } from "mongoose";


const accountsSchema = new Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
  platform:{type:String,enum:["twitter","linkedin","facebook","instagram","facebook_page","linkedin_page","instagram_business"],required:true},

  handle:{type:String,required:true},
  zernioAccountId:{type:String},
  accessToken:{type:String},
  TokenExpiredAt :{type:Date},
  status:{type:String,enum:["connected","disconnect"],default:'connected'},

  avatarUrl:{type:String}
},{timestamps:true})

export const Account = mongoose.model("Account",accountsSchema)