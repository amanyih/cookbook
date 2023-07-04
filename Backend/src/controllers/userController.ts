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
