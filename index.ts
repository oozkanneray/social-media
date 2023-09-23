import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler";
import userRoutes from "./routes/userRoutes";
import postRouter from "./routes/postRoutes";
import authRouter from "./routes/authRoute";
import connectDB from "./config/dbConnect";

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/post", postRouter);
app.use("/api/auth", authRouter);
app.use(errorHandler)

app.listen(port, () => {
  console.log("server is running on " + port);
});
