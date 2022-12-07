import Express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import feedbackRouter from "./routes/Feedback-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = Express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", feedbackRouter);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
