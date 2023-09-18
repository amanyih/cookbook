import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import { StateInterface } from "../../store";

const Notification = () => {
  const { success, title, message, duration } = useSelector(
    (state: StateInterface) => state.ui.notifcation
  );
  const dispatch = useDispatch();

  const handleMouseLeave = () => {
    dispatch(uiActions.hideNotification());
  };

  setTimeout(() => {
    dispatch(uiActions.hideNotification());
  }, duration);

  return (
    <div
      className={` fixed z-50 w-full md:w-1/3 shadow-2xl rounded-l-xl overflow-hidden transition duration-300 ease-in-out border-l-4 lg:w-1/4 bottom-0 -right-10  mb-10 mr-10 p-4
       dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex justify-between items-center font-semibold
        ${
          success ? "border-green-500" : "border-red-500"
        } bg-white dark:bg-gray-800 shadow-xl
        animated slideInRight
        `}
    >
      <span className="flex flex-col justify-center items-start ">
        <h1
          className={`text-gray-800 dark:text-gray-200 
        ${
          success ? "text-green-500" : "text-red-500"
        } text-sm font-semibold transition duration-300 ease-in-out
        `}
        >
          {title}
        </h1>
        <p className=" dark:text-gray-200 text-gray-800 transition duration-300 ease-in-out text-xl text-left ">
          {message}
        </p>
      </span>
      <span
        className=" dark:text-gray-200 text-gray-800 transition duration-300 ease-in-out text-xl cursor-pointer hover:bg-red-200 p-6 rounded-full w-8 h-8 flex justify-center items-center"
        onClick={handleMouseLeave}
      >
        x
      </span>
    </div>
  );
};

export default Notification;
