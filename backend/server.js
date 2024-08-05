import express from 'express';
import connectDB from "./src/db/index.js";
import { Users } from './src/db/models/CreateUsers.js';
import dotenv from "dotenv";
dotenv.config({
  path: "./.env"
})
connectDB();  // Connect to MongoDB

const app = express();

app.use(express.json());
app.get('/api', (req, res) => {
  console.log("api hit");
  res.send('Hello API');
});

app.post('/api/signup', (req, res) => {
  const { userMail: userEmail, userPassword: userPassword } = req.body;
  const newUser = new Users({ name: `${userEmail}`, password: `${userPassword}` });
  newUser.save();
  if (userEmail !== undefined) {
    res.status(201).json({ ok: true, message: "signup success" });
  }
  else {
    res.status(401).json({ ok: false, message: "signup unsuccessfull" });
  }
});



app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});