import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import ApiError from "../utils/ApiError";
import db from "../utils/db";
import bcrypt from "bcrypt";

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
interface ILogin {
  email: string;
  password: string;
}
export const LoginUser = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as ILogin;
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new ApiError("there was an error in email or password", 401));
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return next(new ApiError(error.message, 400));
  }
});

// @desc    Register user
// @route   POST /api/v1/auth/sign-up
// @access  Public
interface IRegister {
  email: string;
  password: string;
  name: string;
  phone: string;
  wilaya: string;
  commune: string;
}
export const RegisterUser = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, name, phone, wilaya, commune } = req.body as IRegister;
    const user = await db.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        name,
        phone,
        wilaya,
        commune,
      },
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    return next(new ApiError(error.message, 400));
  }
});
