//const express = require ('express')
import express from "express"; // write the program using ES6 import
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import cors from "cors";
dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DB_STRING);
    console.log(`Database connect ${conn.connection.host} `);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
connectDB();

const PORT = process.env.PORT || 8000;

/*middleware*/
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*routes basic*/
app.get("/", (req, res) => {
  res.send("hello world ");
});

app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

/*port*/
app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
