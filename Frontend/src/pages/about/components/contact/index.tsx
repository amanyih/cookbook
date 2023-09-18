import { PiMapPinLineThin } from "react-icons/pi";
import { LuMailOpen } from "react-icons/lu";
import {
  BsTelephone,
  BsInstagram,
  BsFacebook,
  BsTelegram,
} from "react-icons/bs";
import { Button } from "../../../../components";
const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="w-full  flex flex-col justify-between items-center"
    >
      <h1 className=" text-center text-gray-600 dark:text-gray-300 text-3xl font-semibold md:px-10 py-10 mb-10 w-full ">
        Contact Us
      </h1>
      <div className=" w-1/2 relative ">
        <div className="invisible  2xl:visible absolute h-[80%] bg-primary-400 -left-48 top-[8%] flex flex-col justify-between items-center md:px-10 py-10 mb-10 rounded-md shadow-xl transition duration-300 ease-in-out ">
          <div className=" flex flex-col gap-10 items-center justify-center w-full h-full text-gray-50 dark:text-gray ">
            <h1 className="text-center text-white text-3xl font-semibold mb-5">
              Contact Info
            </h1>
            <span className="flex gap-5">
              <PiMapPinLineThin className="text-2xl" />
              <p>123 Main St. New York, NY 10001</p>
            </span>
            <span className="flex gap-5">
              <LuMailOpen className="text-2xl" />
              <p>
                <a href="mailto:am@gmail.com">am@gmail.com </a>
              </p>
            </span>
            <span className="flex gap-5">
              <BsTelephone className="text-2xl" />
              <p>
                <a href="tel:1234567890">123-456-7890</a>
              </p>
            </span>
          </div>
          <div className="flex gap-10 items-center justify-center w-full h-full text-gray-50 dark:text-gray-300 text-3xl">
            <BsFacebook className=" hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer" />
            <BsInstagram className=" hover:text-gray-400 transition duration-300 ease-in-out cursor " />
            <BsTelegram className=" hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>
        <div
          className="  w-full  flex items-center justify-between px-10 py-10 mb-10 bg-white
          shadow-xl dark:bg-slate-600"
        >
          <div className="w-0  2xl:w-1/2 h-full bg-cover bg-center rounded-md shadow-xl transition"></div>
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-5">
              Send a Message
            </h1>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                className=" border-b-2 border-gray-300 focus:outline-none
                dark:bg-slate-700 focus:border-primary-400 w-full mb-5 p-2"
              />
              <input
                type="text"
                placeholder="Email"
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 dark:bg-slate-700"
              />
              <input
                type="text"
                placeholder="Subject"
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 dark:bg-slate-700"
              />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Message"
                className=" border-b-2 border-gray-300 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 resize-none dark:bg-slate-700"
              ></textarea>
              <Button className=" self-end w-32 h-12">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
