import { useState } from "react";
import { Modal } from "../../../../components";

const ChangePasswordModal = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword((prev) => !prev);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h1 className=" text-3xl text-gray-800 dark:text-gray-50 font-semibold px-10 mb-10">
          Change Password
        </h1>
        <form
          className=" w-full flex flex-col justify-between items-center bg-gray-50 dark:bg-gray-900 px-10 py-10 mb-10"
          action=""
        >
          <input
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p "
            type="password"
            placeholder="Current Password"
          />
          <input
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p "
            type="password"
            placeholder="New Password"
          />
          <input
            className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p "
            type="password"
            placeholder="Confirm Password"
          />

          <button className=" bg-primary-400 text-white px-5 py-2 rounded-md hover:bg-primary-500 transition duration-300 ease-in-out self-end">
            Change Password
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
