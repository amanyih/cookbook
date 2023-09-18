import { profileActions } from "..";
import { uiActions } from "../../ui";
import { imageActions } from "../../image";
const getProfileByUserNameAction = (getProfile: any, userName: string) => {
  return async (dispatch: any) => {
    dispatch(profileActions.profileLoading());
    const fetchProfile = async () => {
      const res = await getProfile({
        url: `/profile/${userName}`,
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch profile");

      return res;
    };
    try {
      const res = await fetchProfile();
      dispatch(profileActions.profile(res["data"]["profile"]));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
      dispatch(profileActions.profileError());
    }
  };
};

const updateProfileAction = (
  updateProfile: any,
  profile: {
    id: string;
    profile: {
      bio?: string;
      profilePicture?: string;
      name?: string;
      email?: string;
    };
  }
) => {
  return async (dispatch: any) => {
    const update = async () => {
      const res = await updateProfile({
        url: `/profile/${profile.id}`,
        method: "PATCH",
        body: profile.profile,
      });

      console.log("res", res);

      if (res["status"] !== "success")
        throw new Error("Failed to update profile");

      return res;
    };

    try {
      const res = await update();
      localStorage.setItem("user", JSON.stringify(res["data"]["user"]));
      dispatch(profileActions.profile(res["data"]["user"]["profile"]));
      console.log(res["data"]["user"]["profile"]);
      dispatch(
        uiActions.showNotification({
          success: true,
          title: "Success",
          message: "Profile updated successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
      dispatch(profileActions.profileError());
    }
  };
};

const changePasswordAction = (
  changePassword: any,
  passwords: {
    curPassword: string;
    newPassword: string;
  }
) => {
  return async (dispatch: any) => {
    const change = async () => {
      const res = await changePassword({
        url: `/profile/change-password`,
        method: "PATCH",
        body: passwords,
      });

      return res;
    };

    try {
      const res = await change();
      dispatch(
        uiActions.showNotification({
          success: true,
          title: "Success",
          message: "Password changed successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
    }
  };
};

export {
  getProfileByUserNameAction,
  updateProfileAction,
  changePasswordAction,
};
