import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import multer from "multer";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/Config.js";
import userRoutes from "./routes/User.js";
import otpRoutes from "./routes/OTP.js";
import { updateImage } from "./Controllers/User.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

const storage = multer.memoryStorage();
const upload = multer({ storage });

function multerErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    // Handle multer errors here
    res.status(400).json({ message: "Multer error: " + err.message });
  } else {
    // Pass other errors to the global error handler
    next(err);
  }
}

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/auth/otp", otpRoutes);
app.post("/api/v1/auth/updateImage/:id", upload.single("image"), updateImage);

app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 server at http://localhost:${port}.`));
connectDB();
