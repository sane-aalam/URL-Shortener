import express from "express";
const router = express.Router();
// import login/regiser from the controller
import { loginUser, registerUser } from "../controllers/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
