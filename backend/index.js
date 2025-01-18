import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"


dotenv.config();
const app = express();
const port = process.env.PORT || 3000
app.use(express.json()); // allow us to parse incoming requests with JSON payload: req.body
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello world 123");
});

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});

// WdADCeM7HCBvGiZB
