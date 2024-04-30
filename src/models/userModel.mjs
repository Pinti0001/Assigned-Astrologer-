import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    gendre : {
        type : String,
        required : true,
        enum: ['male', 'female', 'other']
    },
    dob : {
        type:String,
        required:true, 
        trim:true
    },
    phone : {
        type : String,
        minLength : 10
    },
    email : {
        type : String,
        trim : true,
        lowercase: true,
        unique: true,
        required : true
    },
    password : {
        type : String,
        minLength : 4,
        maxLength : 20,
        trim : true,
        required : true
    },
    assignedAstrologer : {
        type : mongoose.Types.ObjectId,
        ref : "AstrologerData"
    }

},{timestamps:true});  // Add createdAt and updatedAt fields to track document timestamps

// Create and export the UserData model based on the user schema
export default mongoose.model("UserData", userSchema);