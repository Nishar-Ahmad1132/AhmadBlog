import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./api/routes/auth.route.js";
import commentRoutes from "./api/routes/comment.route.js";
import postRoutes from "./api/routes/post.route.js";
import userRouter from "./api/routes/user.route.js";

dotenv.config();
const app = express();

// ---------------------------
// 🔥 CORS FIX
// ---------------------------

const whitelist = [
  process.env.FRONTEND_URL, // e.g. https://ahmadblog.vercel.app
  "http://localhost:5173", // Vite dev
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (whitelist.includes(origin)) return callback(null, true);
      return callback(new Error("CORS blocked"), false);
    },
    credentials: true,
  })
);

// ---------------------------
// 🔥 MONGO CONNECTION
// ---------------------------
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Mongodb Successfully Connected!"))
  .catch((e) => console.log("Error occurred ", e));

app.use(express.json());
app.use(cookieParser());

// ---------------------------
// 🔥 API ROUTES
// ---------------------------
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// ---------------------------
// 🚫 REMOVE FRONTEND SERVING
// Render MUST NOT serve Vercel frontend
// ---------------------------
// ❌ DELETE THESE LINES FROM YOUR OLD CODE:
// app.use(express.static(path.join(__dirname, '../frontend/dist')));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

// ---------------------------
// 🔥 GLOBAL ERROR HANDLER
// ---------------------------
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ---------------------------
// 🔥 START SERVER
// ---------------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
