//auth middleware

import { Request, Response, NextFunction } from "express";
import { User } from "../models";

import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const protect = async (req: any, res: Response, next: NextFunction) => {
  try {
    //get token from header bearer token
    const token = req.header("Authorization")?.split(" ")[1];
    console.log(token);
    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "No token, authorization denied",
      });
    }

    //verify token
    const decoded: any = jwt.verify(token, config.jwt.secret!);
    if (!decoded) {
      return res.status(401).json({
        status: "fail",
        message: "Token is not valid",
      });
    }
    //check if user exists
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "User not found",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Not authorized to access this route",
    });
  }
};

export const addUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    //get token from header bearer token
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return next();
    }

    //verify token
    const decoded: any = jwt.verify(token, config.jwt.secret!);
    if (!decoded) {
      return next();
    }
    //check if user exists
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return next();
    }
    req.user = user;
    next();
  } catch (err) {
    next();
  }
};
