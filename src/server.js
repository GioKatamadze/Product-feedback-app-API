import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import feedbackRouter from "./routes/Feedback-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import categoryRouter from "./routes/Category-router.js";
import statusRouter from "./routes/Status-router.js";
import userRouter from "./routes/User-router.js";
import commentRouter from "./routes/Comment-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/storage"));
app.use(cors());
app.use("/api", cors(), feedbackRouter);
app.use("/api", cors(), categoryRouter);
app.use("/api", cors(), statusRouter);
app.use("/api", cors(), userRouter);
app.use("/api", cors(), commentRouter);
app.use("/", cors(), ...swaggerMiddleware());

app.listen(process.env.PORT || 5000);
