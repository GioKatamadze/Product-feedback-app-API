import express from "express";
import { getAllUsers } from "../controllers/User-controller.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
export default userRouter;
