import Express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import connectToMongo from "./config/mongo.js";
import feedbackRouter from "./routes/Feedback-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import categoryRouter from "./routes/Category-router.js";

const app = Express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());

app.use("/api", feedbackRouter);
app.use("/api", categoryRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
