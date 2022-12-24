import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    gender:String,
    name:{type:{
        title:String,
        first:String,
        last:String
    }},
    email:String,
    phone:String,
    picture:{type:{
        large:String,
        medium:String,
        thumbnail:String
    }}
},{
    timestamps:true,
    versionKey:false
});

export const UserModel=mongoose.model('User', UserSchema);