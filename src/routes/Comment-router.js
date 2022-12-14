import express from "express";
import { addComment, addReply } from "../controllers/Comment-controller.js";

const commentRouter = express.Router();

commentRouter.post("/comment", addComment);
commentRouter.post("/reply", addReply);

export default commentRouter;
