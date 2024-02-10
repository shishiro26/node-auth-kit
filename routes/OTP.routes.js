import express from "express";
import { resendOtp, verifyOtp } from "../Controllers/OTP.controllers.js";
import { verifyAccessToken } from "../utils/GenerateToken.js";
const router = express.Router();

router.post("/verifymail", verifyAccessToken, verifyOtp);
router.post("/resend/", verifyAccessToken, resendOtp);

export default router;
