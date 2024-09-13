import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import authRouter from "./api/routes/auth.route.js";
import commentRoutes from "./api/routes/comment.route.js";
import postRoutes from "./api/routes/post.route.js";
import userRouter from "./api/routes/user.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb Connected..");
  })
  .catch((e) => {
    console.log("Error occurred ", e);
  });

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// Use environment variable for port or default to 4000
// const PORT = process.env.PORT || 4000;

app.listen(3000, () => {
  console.log(`Server running on port ...`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
