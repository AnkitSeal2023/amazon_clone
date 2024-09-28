import mongoose from "mongoose";
const UsersSchema = new mongoose.Schema({
    name:{type : String, default:"name-not-initialsed"},
    email: {type: String, default:"email-not-initialised"},
    password:{type: String, default:"" },
    cart:{type: Array, default:[]},
    totalPrice:{type: Number, default:0}
})

const ProductsSchema = new mongoose.Schema({
    product_id: {type: String, default:""},
    product_name: {type: String, default:""},
    product_description: {type: String, default:""},
    product_price: {type: Number, default:0},
    product_category: {type: String, default:""},
    product_image: {type: String, default:""},
})
const Users = mongoose.model('Users', UsersSchema);
const Products = mongoose.model('Products', ProductsSchema);
export {Users, Products};