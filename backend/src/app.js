import express from "express";
const app = express();
const PORT = process.env.PORT;
import connectDB from "./config/mongodb.config.js";
import dotenv from "dotenv";
dotenv.config("./.evn");

// Parses incoming JSON
// Express.js application sets up middleware to parse incoming URL-encoded data,
// typically from HTML form submissions.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import all rountes
import urlRoutes from "./routes/short_url.route.js";
import { redirectShortUrlToFullUrl } from "./controllers/short_url.controller.js";

// routes declaration
app.use("/api/create", urlRoutes);
app.get("/:id", redirectShortUrlToFullUrl);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
