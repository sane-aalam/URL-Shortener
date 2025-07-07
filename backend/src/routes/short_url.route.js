import express from "express";
const router = express.Router();
// import controllers into router file
import { createShortUrl } from "../controllers/short_url.controller.js";

router.post("/", createShortUrl);

export default router;
