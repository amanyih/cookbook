import { User, UserProfile } from "../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, name, username } = req.body;

    //check if user exists
    let user =
      (await User.findOne({ where: { email } })) ||
      (await User.findOne({ where: { username } }));
    if (user) {
      return res.status(400).json({
        status: "faile",
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser: any = await User.create(
      {
        email,
        password: hashedPassword,
        username,
      },
      { fields: ["email", "password", "username"] }
    );
    const newProfile = await UserProfile.create({
      name: name,
    });

    await newUser.setProfile(newProfile);

    user = await User.findOne({
      where: { email },
      attributes: ["id", "email", "createdAt", "updatedAt", "username"],
      include: [
        {
          model: UserProfile,
          as: "profile",
          attributes: ["name", "bio", "profilePicture"],
        },
      ],
    });

    const token = jwt.sign({ id: newUser.id }, config.jwt.secret!);

    res.status(201).json({
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

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    //check if user exists
    let user: any = await User.findOne({
      where: { email: email },
      attributes: [
        "id",
        "email",
        "createdAt",
        "updatedAt",
        "password",
        "username",
      ],
      include: [
        {
          model: UserProfile,
          as: "profile",
          attributes: ["name", "bio", "profilePicture"],
        },
      ],
    });

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

    user.password = undefined;

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
