import { BsCamera, BsPatchCheck } from "react-icons/bs";
import { AnyAction } from "redux";

import { useEffect, useState } from "react";
import EditProfileMoal from "../edit_profile_modal";
import ChangePasswordModal from "../change_password_modal";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import constants from "../../../../constants";
import { useParams } from "react-router";
import useHttp from "../../../../hooks/useHttp";
import { Button, LoadingSpinner } from "../../../../components";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../../../store";
import {
  getProfileByUserNameAction,
  updateProfileAction,
} from "../../../../store/profile/actions";
import uploadImageAction from "../../../../store/image/actions";
import { imageActions } from "../../../../store/image";

const UserInformation = () => {
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const [openChangePassword, setOpenChangePassword] = useState<boolean>(false);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const curUser = useCurrentUser();
  const { username } = useParams();
  const { sendRequest: getProfile, sendRequestWithFormData } = useHttp();

  const dispatch = useDispatch();
  const { profile, error, loading } = useSelector(
    (state: StateInterface) => state.profile
  );
  const {
    loading: imageLoading,
    error: imageError,
    image,
  } = useSelector((state: StateInterface) => state.image);

  useEffect(() => {
    dispatch(
      getProfileByUserNameAction(getProfile, username!) as unknown as AnyAction
    );
    resetFileInput();
  }, [username, dispatch]);

  const resetFileInput = () => {
    const fileInput: HTMLInputElement | null = document.getElementById(
      "fileInput-profile"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const editProfile = () => {
    setOpenEditProfile((prev) => !prev);
  };
  const changePassword = () => {
    setOpenChangePassword((prev) => !prev);
  };
  const changeProfilePicture = async () => {
    const fileInput = document.getElementById("fileInput-profile");
    fileInput!.click();
    fileInput!.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      if (!file) {
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };
  const saveChanges = () => {
    dispatch(imageActions.resetImage());
    const formData = new FormData();
    formData.append("image", imageFile!);
    dispatch(
      uploadImageAction(
        sendRequestWithFormData,
        formData
      ) as unknown as AnyAction
    );

    while (!image && loading && !error) {}
    if (imageError) {
      return;
    }
    dispatch(
      updateProfileAction(getProfile, {
        id: curUser!.id as string,
        profile: {
          profilePicture: image!,
        },
      }) as unknown as AnyAction
    );

    setImagePreview(null);

    resetFileInput();
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full h-full bg-gray-50 dark:bg-slate-800 px-10 py-10 mb-10">
      {profile && (
        <div className=" flex flex-col lg:flex-row justify-between lg:justify-center items-center lg:items-start  w-full h-full  relative">
          {imagePreview && (
            <Button className=" absolute top-0 right-0" onClick={saveChanges}>
              Save Changes
            </Button>
          )}
          <input
            type="file"
            name=""
            id="fileInput-profile"
            className="hidden w-0 h-0 "
            accept="image/*" // only accept image files
          />
          <span className="relative">
            <img
              src={
                imagePreview
                  ? imagePreview
                  : profile.profilePicture
                  ? profile.profilePicture
                  : constants.profilePlaceholder
              }
              className="w-64 h-64 rounded-full object-cover mb-5 hover:opacity-80 cursor-pointer transition duration-300 ease-in-out"
              alt=""
              onClick={
                curUser && curUser.id == profile.user.id && changeProfilePicture
              }
            />
            {curUser && curUser.id == profile.user.id && (
              <BsCamera
                className=" text-3xl text-gray-700 dark:text-gray-50 mb-5 hover:opacity-80 cursor- duration-300 ease-in-out absolute bottom-0 right-0 cursor-pointer"
                onClick={changeProfilePicture}
              />
            )}
          </span>
          <h1 className=" text-center text-gray-700 dark:text-gray-50 text-3xl font-semibold px-10 py-10 mb-10 flex flex-col justify-center items-center">
            <div className="flex items-center gap-5 mb-5">
              <span className="text-5xl text-bold ">{profile.name}</span>
              {profile.user.id === 1 && (
                <span
                  className=" text-4xl text-blue-500 font-bold dark:text-gray-50 mb-5
                animate-pulse
                duration-1000
                ease-in-out
                "
                >
                  <BsPatchCheck />
                </span>
              )}
            </div>

            <span className=" text-3xl text-gray-700 dark:text-gray-50 mb-5">
              {profile.user.email}
            </span>
            <span className=" text-2xl text-gray-500 dark:text-gray-50 mb-5">
              <p>
                <span className=" ">{profile.bio}</span>
              </p>
            </span>
            {curUser && curUser.id == profile.user.id && (
              <span>
                <Button onClick={editProfile}>Edit Profile</Button>
                <Button
                  background="bg-transparent"
                  textcolor="text-gray-700 dark:text-gray-50"
                  onClick={changePassword}
                >
                  Change Password
                </Button>
              </span>
            )}
          </h1>
          {openEditProfile && (
            <EditProfileMoal open={openEditProfile} onClose={editProfile} />
          )}
          {openChangePassword && (
            <ChangePasswordModal
              open={openChangePassword}
              onClose={changePassword}
            />
          )}
        </div>
      )}
      {loading && <LoadingSpinner />}
      {error && (
        <p>
          {
            <div>
              <h1 className="text-2xl font-bold text-red-500">Error</h1>
              <p className="text-lg text-red-500">
                Something went wrong while fetching the data
              </p>
            </div>
          }
        </p>
      )}
    </div>
  );
};

export default UserInformation;
