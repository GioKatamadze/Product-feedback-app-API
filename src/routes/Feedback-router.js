import Express from "express";
import { getAllFeedbacks } from "../controllers/Feedback-controller.js";

const feedbackRouter = Express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);

export default feedbackRouter;
