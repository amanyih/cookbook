import { User, UserProfile, Comment, Recipe, Like } from "../models";
import bcrypt from "bcrypt";

export const getProfile = async (req: any, res: any) => {
  try {
    const { username } = req.params;
    const user: any = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const profile = await UserProfile.findOne({
      where: { userId: user.id },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "email", "createdAt", "username"],
        },
      ],
    });

    res.status(200).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateProfile = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { name, bio, profilePicture, email } = req.body;
    const reqUser = req.user;

    if (id != reqUser.id) {
      return res.status(401).json({
        status: "fail",
        message: "You are not authorized to perform this action.",
      });
    }

    const profile: any = await UserProfile.findOne({
      where: { userId: id },
    });

    if (!profile) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    if (email) {
      const user = await User.findOne({
        where: { email },
      });

      if (user) {
        return res.status(400).json({
          status: "fail",
          message: "Email already in use",
        });
      }

      await User.update(
        { email },
        {
          where: { id },
        }
      );
    }

    if (name) profile.name = name;
    if (bio) profile.bio = bio;
    if (profilePicture) profile.profilePicture = profilePicture;

    await profile.save();

    let user: any = await User.findOne({
      where: { id },
      attributes: ["id", "email", "username", "createdAt", "updatedAt"],
      include: [
        {
          model: UserProfile,
          as: "profile",
          attributes: ["name", "bio", "profilePicture"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["id", "email", "createdAt", "username"],
            },
          ],
        },
      ],
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteProfile = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const reqUser = req.user;

    if (id != reqUser.id) {
      return res.status(401).json({
        status: "fail",
        message: "You are not authorized to perform this action.",
      });
    }

    const profile: any = await UserProfile.findOne({
      where: { userId: id },
    });

    if (!profile) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    await profile.destroy();

    res.status(200).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const changePassword = async (req: any, res: any) => {
  try {
    const { curPassword, newPassword } = req.body;
    const reqUser = req.user;

    const user: any = await User.findOne({
      where: {
        id: reqUser.id,
      },
      attributes: ["id", "password"],
    });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User Not Found",
      });
    }
    const validPassword = await bcrypt.compare(curPassword, user.password);
    if (!validPassword) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid password",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);

    user.password = password;

    await user.save();

    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
