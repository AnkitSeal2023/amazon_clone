import mongoose from "mongoose";
const UsersSchema = new mongoose.Schema({
    name: {type: String, default:"name-not-initialised"},
    password:{type: String, default:"none" }
})

export const Users = mongoose.model('Users', UsersSchema);