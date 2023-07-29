import { UserInformation, UserActivity } from "./components";

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div className="w-full flex-grow flex justify-between">
        <UserInformation />
        <UserActivity />
      </div>
    </div>
  );
};

export default ProfilePage;
