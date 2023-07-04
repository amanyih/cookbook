import { User } from "../models/index";

export const createUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (req: any, res: any) => {};
export const getAllUsers = async (req: any, res: any) => {};
export const updateUser = async (req: any, res: any) => {};
export const deleteUser = async (req: any, res: any) => {};
