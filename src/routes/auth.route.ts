import express from "express";
import { LoginUser, RegisterUser } from "../services/AuthServices";
const authRoute = express.Router();

authRoute.post("/sign-in", LoginUser);
authRoute.post("/sign-up", RegisterUser);

export default authRoute;
