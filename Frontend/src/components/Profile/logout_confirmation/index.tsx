import SectionTitle from "../../SectionTitle";
import Button from "../../button";
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
      <div className="py-5">
        <SectionTitle title="Are you sure you want to logout?" />
        <div className="flex w-full gap-2 items-center justify-center">
          <Button
            background="bg-transparent hover:bg-gray-300"
            textcolor=" text-gray-800"
            onClick={() => {
              logout();
              onClose();
            }}
          >
            Yes
          </Button>
          <Button
            className="w-32"
            onClick={() => {
              onClose();
            }}
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutConfirmation;
