interface ModalInterface {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalInterface> = ({ children, open, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose();
        }
      }}
    >
      <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="rounded p-6  bg-white dark:bg-gray-800 shadow-xl"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
