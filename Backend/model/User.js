import { Schema, model } from "mongoose";


const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    dateOfBirth:{type:Date, default:Date},
    userName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    from:{type:String, required:true},
    to:{type:String, required:true},
    message:{type:String, required:true},


});

const User = model('user', userSchema);

export default User;