import { BsCamera } from "react-icons/bs";

import { useEffect, useState } from "react";
import EditProfileMoal from "./edit_profile_modal";
import ChangePasswordModal from "./change_password_modal";
import useCurrentUser from "../../../hooks/useCurrentUser";
import constants from "../../../constants";
import { useLocation } from "react-router";
import useHttp from "../../../hooks/useHttp";
import { LoadingSpinner } from "../../../components";

const UserInformation = () => {
  const [openEditProfile, setOpenEditProfile] = useState<boolean>(false);
  const [openChangePassword, setOpenChangePassword] = useState<boolean>(false);

  const [imageFile, setImageFile] = useState<File | null>(null); // [1
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname.split("/").at(-1);
  const [user, setUser] = useState<any>(useCurrentUser());
  const [loading, setLoading] = useState<boolean>(false);
  const { sendRequest: getUser } = useHttp();

  useEffect(() => {
    const fetchUser = async () => {
      if (pathname === "profile" || pathname === "") {
        return null;
      }

      const user = await getUser({
        url: `/user/${pathname}`,
      });

      setUser(user["data"]["user"]);
    };

    fetchUser();
  }, []);

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
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };
  const saveChanges = () => {};

  return (
    <div className=" flex flex-col justify-center items-center w-full h-full bg-gray-50 dark:bg-gray-900 px-10 py-10 mb-10">
      {user && (
        <div className=" flex flex-col lg:flex-row justify-between lg:justify-center items-center lg:items-start  w-full h-full bg-gray-50 dark:bg-gray-900 relative">
          {imagePreview && (
            <button
              className="
        absolute top-0 right-0 bg-primary-400 text-white px-5 py-2 rounded-md hover:bg-primary-500 transition duration-300 ease-in-out"
              onClick={saveChanges}
            >
              Save Changes
            </button>
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
                  : user.profile && user.profile.profilePicture
                  ? user.profile.profilePicture
                  : constants.profilePlaceholder
              }
              className="w-64 h-64 rounded-full object-cover mb-5 hover:opacity-80 cursor-pointer transition duration-300 ease-in-out"
              alt=""
              onClick={changeProfilePicture}
            />
            <BsCamera
              className=" text-3xl text-gray-700 dark:text-gray-50 mb-5 hover:opacity-80 cursor- duration-300 ease-in-out absolute bottom-0 right-0 cursor-pointer"
              onClick={changeProfilePicture}
            />
          </span>
          <h1 className=" text-center text-gray-700 dark:text-gray-50 text-3xl font-semibold px-10 py-10 mb-10 flex flex-col ">
            <span className="text-5xl text-bold ">
              {user.profile && user.profile.name}
            </span>
            <span className=" text-3xl text-gray-700 dark:text-gray-50 mb-5">
              {user.email}
            </span>
            <span className=" text-2xl text-gray-500 dark:text-gray-50 mb-5">
              <p>
                <span className=" ">{user.profile && user.profile.bio}</span>
              </p>
            </span>
            <span>
              <button
                className=" bg-primary-400 text-white px-5 py-2 rounded-md hover:bg-primary-500 transition duration-300 ease-in-out"
                onClick={editProfile}
              >
                Edit Profile
              </button>
              <button
                className="
            px-5
            py-2
            rounded-md
            text-gray-700
            dark:text-gray-50
            "
                onClick={changePassword}
              >
                Change Password
              </button>
            </span>
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
      {!user && <LoadingSpinner />}
    </div>
  );
};

export default UserInformation;
