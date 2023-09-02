import { User } from "../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;
    console.log(email, password, username);
    //check if user exists
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }
    console.log("before hash");
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("after hash");
    //create user
    const newUser: any = await User.create(
      {
        email,
        password: hashedPassword,
        username,
      },
      { fields: ["email", "password", "username"] }
    );

    console.log("BEFORE TOKEN", config.jwt.secret!, newUser.id);
    //create token
    const token = jwt.sign({ id: newUser.id }, config.jwt.secret!);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    //check if user exists
    let user: any = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    //create token
    const token = jwt.sign({ id: user.id }, config.jwt.secret!);

    res.status(200).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
