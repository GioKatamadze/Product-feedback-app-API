import Express from "express";
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

const app = Express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/storage"));

app.use("/api", feedbackRouter);
app.use("/api", categoryRouter);
app.use("/api", statusRouter);
app.use("/api", userRouter);
app.use("/api", commentRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
