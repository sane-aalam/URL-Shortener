import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT;
import connectDB from "./config/mongodb.config.js";
dotenv.config();

app.get("/createURL", (req, res) => {
  const generateString = nanoid(7);
  res.json({
    msg: "successfully called done",
    str: generateString,
    return: 1,
  });
});

connectDB()
  .then(() => {
    app.listen(PORT || 3000, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
