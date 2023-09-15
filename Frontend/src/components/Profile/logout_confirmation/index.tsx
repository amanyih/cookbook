import Modal from "../../modal";

const LogoutConfirmation = ({
  open,
  onClose,
  logout,
}: {
  open: boolean;
  onClose: () => void;
  logout: () => void;
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="flex flex-col justify-center items-center
        bg-gray-50 dark:bg-gray-900
        px-10
        py-10
        mb-10
      "
      >
        <h1
          className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-10

        "
        >
          Are you sure you want to logout?
        </h1>
        <div
          className="flex w-full gap-2 items-center justify-center
        
        "
        >
          <button
            className=" text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
            onClick={() => {
              logout();
              onClose();
            }}
          >
            Yes
          </button>
          <button
            className="bg-primary-400 text-white px-5 py-2 rounded-md hover:bg-primary-500 transition duration-300 ease-in-out
            w-56

            "
            onClick={() => {
              onClose();
            }}
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutConfirmation;
