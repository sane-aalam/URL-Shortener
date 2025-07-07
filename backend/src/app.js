import express from "express";
import { nanoid } from "nanoid";
const app = express();
const PORT = process.env.PORT;
import connectDB from "./config/mongodb.config.js";
import dotenv from "dotenv";
dotenv.config("./.evn");
import UrlSchema from "./models/short_url.model.js";

// Parses incoming JSON
// Express.js application sets up middleware to parse incoming URL-encoded data, typically from HTML form submissions.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", async (req, res) => {
  try {
    const { url } = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new UrlSchema({
      full_url: url,
      short_url: shortUrl,
    });
    await newUrl.save();
    res.status(201).json({
      message: "Database inserted successfully!",
      data: shortUrl,
    });
  } catch (error) {
    console.error("Error inserting into database:", error.message);
    res.status(500).json({
      message: "Failed to insert into database",
      error: error.message,
    });
  }
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
