import { User, UserProfile, Comment, Recipe, Like } from "../models";

export const getProfile = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const profile = await UserProfile.findOne({
      where: { userId: id },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "email"],
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
    const { name, bio, profilePicture } = req.body;
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

    if (name) profile.name = name;
    if (bio) profile.bio = bio;
    if (profilePicture) profile.profilePicture = profilePicture;

    await profile.save();

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
