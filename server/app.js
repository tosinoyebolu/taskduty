import express, { json } from "express";
import dotenv from "dotenv";
import createHttpError, { isHttpError } from "http-errors";
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

//Create route

app.get("/", (req, res) => {
  res.send("Hello expresss");
});
//api routrs - anything that concerns users
app.use("/api/user", userRoutes);
app.use("api/task", taskRoutes);

//error for no route
app.use((req, res, next) => {
  next(createHttpError(400, "Endpoint not found"));
});

//general errors
app.use((error, req, res) => {
  console.log(error);
  let errorMessage = "An unknown error has occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    sttatusCOde = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
