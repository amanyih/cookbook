import { ProfileHeader, ChangePhoto } from "./components";

const ProfilePage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <ProfileHeader></ProfileHeader>
      <ChangePhoto></ChangePhoto>
    </div>
  );
};

export default ProfilePage;
