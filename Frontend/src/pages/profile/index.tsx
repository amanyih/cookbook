import { UserInformation, UserActivity } from "./components";

const ProfilePage = () => {
  return (
    <div>
      <div className="w-full flex-grow flex flex-col justify-between items-center">
        <UserInformation />
        <UserActivity />
      </div>
    </div>
  );
};

export default ProfilePage;
