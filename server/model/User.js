import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role : {type: String, require: true},
    email : {type: String, require: true},
    password : {type: String, require: true},
})

const userModel = mongoose.model('User', userSchema);

export default userModel;