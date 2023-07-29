import { Button } from "../../../components";

const UserInformation = () => {
  const editProfile = () => {};

  return (
    <div className=" flex flex-col w-1/5 mr-20">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg"
          className="w-96 h-96 rounded-full object-cover"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-7xl text-bold ">John Doe</h1>
        <h2 className="text-3xl text-gray-700"> @johndoe</h2>
        <Button
          onClick={editProfile}
          isExtraLarge={true}
          isOutlined={true}
          className="w-full mt-10"
        >
          Edit Profile
        </Button>
      </div>

      <div>
        <div>
          <h1 className="text-3xl text-bold">About</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl text-bold">Contact</h1>
          <p className="text-2xl">
            Email: johndoe@gmail.com
            <span className="text-gray-700"></span>
          </p>
          <p className="text-2xl">
            Phone: 1234567890
            <span className="text-gray-700"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
