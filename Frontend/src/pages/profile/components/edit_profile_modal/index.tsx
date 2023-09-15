import { useState } from "react";
import { Modal } from "../../../../components";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useInput from "../../../../hooks/useInput";

interface EditProfileMoalProps {
  onClose: () => void;
  open: boolean;
}

const EditProfileMoal = ({ onClose, open }: EditProfileMoalProps) => {
  const user = useCurrentUser();
  const { value: email, onChange: setEmail } = useInput(
    user.email ?? "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const { value: name, onChange: setName } = useInput(
    user.profile.name ?? "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const [bio, setBio] = useState<string>(user.profile.bio ?? "");

  const saveChanges = (event: any) => {
    event.preventDefault();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h1 className=" text-3xl text-gray-800 dark:text-gray-50 font-semibold px-10 mb-10">
          Edit Profile
        </h1>
        <form
          className=" w-full flex flex-col justify-between items-center bg-gray-50 dark:bg-gray-900 px-10 py-10 mb-10"
          action=""
        >
          <input
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 
            bg-gray-50 dark:bg-slate-700
            "
            type="text"
            placeholder="Email"
            value={email}
            onChange={setEmail}
          />
          <input
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 bg-gray-50 dark:bg-slate-700"
            type="text"
            placeholder="Name"
            value={name}
            onChange={setName}
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Bio"
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 dark:bg-slate-700 resize-none "
          ></textarea>
          <button
            className=" bg-primary-400 text-white px-5 py-2 rounded-md hover:bg-primary-500 transition duration-300 ease-in-out self-end"
            onClick={saveChanges}
          >
            Save Changes
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EditProfileMoal;
