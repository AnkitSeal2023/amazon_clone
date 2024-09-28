import express from 'express';
import jwt from 'jsonwebtoken';
import connectDB from "./src/db/index.js";
import { Users } from './src/db/models/CreateDB.js';
import { Products } from './src/db/models/CreateDB.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import { verify } from 'crypto';
dotenv.config({
  path: "./.env"
})
connectDB();  // Connect to MongoDB

const app = express();
app.use(express.json());

const secretKey = process.env.JWT_SECRET_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateJWT(userEmail) {
  const token = jwt.sign({ userEmail: userEmail }, secretKey);
  // const token = "abc";
  return token;
}

function verifyJWT(token) {
  if (!token)
    return "not found";
  try {
    const verify = jwt.verify(token, secretKey)
    return verify;
  }
  catch (err) {
    if (err.name === "JsonWebTokenError")
    {
      console.log("Error in getUser:", err.message);
      console.log(verify);
    }
    else
      console.log("Error in verifyJWT!!!!:", err);
    return 400;
  }
}
app.post('/api/signup', async (req, res) => {
  const { username: username, userMail: userEmail, userPassword: userPassword } = req.body;
  const existingMail = await Users.findOne({ email: userEmail });
  if (existingMail) {
    res.status(409).json({ ok: false, message: "Email is already registered" });
  }
  else if (userEmail !== undefined) {
    const newUser = new Users({ name: `${username}`, email: `${userEmail}`, password: `${userPassword}` });
    newUser.save();
    const token = generateJWT(userEmail);
    res.status(201).json({ ok: true, message: "signup success", token: `${token}` });
  }
  else {
    res.status(401).json({ ok: false, message: "signup unsuccessfull" });
  }
});

app.patch('/updatecart', async (req, res) => {
  try {
    const { productID: productID, token: token } = req.body;
    const userPayload = verifyJWT(token);
    const updateOne = await Users.updateOne({ email: userPayload.userEmail }, { $push: { cart: productID } })
    console.log("updateOne:", updateOne);
    if (updateOne) {
      // const updateTotalPrice = await Users.update
      res.sendStatus(200);
    }
    else
      res.sendStatus(401);
  }
  catch (error) {
    console.log("databse update error");
  }
})

app.put('/cart', async (req, res) => {
  // const token = String(req.query.token);
  const { token: token } = req.body;
  const userPayload = verifyJWT(token);
  let user;
  let totalPrice;
  let  productMap=[];
  let productNames=[];
  if (userPayload != 400) {
    try {
      user = await Users.findOne({ email: userPayload.userEmail });
    }
    catch (error) {
      console.log("error in fetch cart:", error);
      res.json({ status: 404 });
    }
    const productIds = Array.isArray(user.cart) ? user.cart : [];
    
    //Find total checkout price
    {
      const productCount = productIds.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;  
        return acc;
      }, {});
      const totalPriceData = await Products.aggregate([
        { $match: { product_id: { $in: Object.keys(productCount) } } },  
        {
          $addFields: {
            count: {
              $literal: productCount
            }
          }
        },
        {
          $addFields: {
            productTotal: {
              $multiply: [
                "$product_price",
                { $arrayElemAt: [Object.values(productCount), { $indexOfArray: [Object.keys(productCount), "$product_id"] }] }
              ]
            }
          }
        },
        { $group: { _id: null, totalPrice: { $sum: "$productTotal" } } }  
      ]);
  
      totalPrice = totalPriceData.length > 0 ? totalPriceData[0].totalPrice : 0;
    }
    try{
      const updatePrice = await Users.updateOne(
        { email: userPayload.userEmail },  // Find the user by their email
        { $set: { totalPrice: totalPrice } }  // Update the totalPrice
      );
      const products = await Products.find({ product_id: { $in: productIds } });
       productNames = [];
       productMap = products.reduce((acc, product) => {
          acc[product.product_id] = product.product_name;
          return acc;
      }, {});
      productIds.forEach(id => {
          if (productMap[id]) {
              productNames.push(productMap[id]); // Add product name for each occurrence
          }
      });
    }
    catch(error){
      console.log("error in update price(/cart):", error);
    }
    res.json({ cart: user.cart, products:productNames,total: totalPrice });
  }
  else if (userPayload == 400)
    res.json({ status: 400 });
  else
    res.json({ status: 500 }) // unknown error
})


app.get('/checkEmail', async (req, res) => {
  const userEmail = req.query.email;
  const findMail = await Users.findOne({ email: userEmail })
  if (findMail) {
    res.sendStatus(200);
  }
  else
    res.sendStatus(404);
})
app.get('/checkPassword', async (req, res) => {
  const userPassword = req.query.password;
  const email = req.query.email;
  const findPassword = await Users.findOne({ email: email })
  let token;
  if (findPassword.password === userPassword) {
    try {
      token = generateJWT(email);
    }
    catch (error) {
      console.log("error in checkEmail:", error);
    }
    res.json({ status: 200, username: findPassword.name, token: token });
  }
  else
    res.sendStatus(404);
})

app.get('/product', async (req, res) => {
  const id = (req.query.id);
  const product = await Products.findOne({ product_id: id });
  res.json(product);
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
