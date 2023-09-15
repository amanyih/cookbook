import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Logo, LoadingSpinner } from "../../../components";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../store/context";
import img from "../../../assets/svg/breakfast.svg";

const RegisterPage = () => {
  const { setAuth } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { data: user, error, sendRequest: registerUser, loading } = useHttp();
  const { value: email, onChange: emailChange } = useInput("", (value) => {
    //validate regex
    var emailRegex = /\S+@\S+\.\S+/;

    return (
      emailRegex.test(value) &&
      value.includes(".") &&
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
    );
  });

  const { value: password, onChange: passwordChange } = useInput(
    "",
    (value) =>
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined
  );

  const { value: name, onChange: nameChange } = useInput("", (value) => {
    var letters = /^[A-Za-z]+$/;
    //validate regex
    return (
      value.length > 5 &&
      value.length < 50 &&
      value !== "" &&
      value !== null &&
      value !== undefined &&
      letters.test(value)
    );
  });

  const handleRegister = async () => {
    await registerUser({
      url: `/auth/${isSignUp ? "signup" : "login"}`,
      method: "POST",
      body: {
        email: email,
        password: password,
        ...(isSignUp && { name: name }),
      },
    });
    if (!error && user) {
      console.log(user);
      console.log(user);
      setAuth(true);
      localStorage.setItem("token", user!.data.token);
      localStorage.setItem("user", JSON.stringify(user!.data.user));
      navigate(location.state ? location.state.from : "/", { replace: true });
    }
  };

  return (
    <div
      className=" flex items-center justify-center h-screen bg-cover bg-center backdrop-blur-sm"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/03/07/35/21/360_F_307352129_dvr99c36HQ8fOUDwhn4awr710K0JqBSJ.jpg)",
      }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg backdrop-blur-3xl xl:w-1/4">
        <div className="flex justify-between">
          <Logo navigate={false} />
          <h1 className="text-3xl mb-5 text-center font-semibold">
            {isSignUp ? "Sign Up" : "Login"}
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          {isSignUp && (
            <span>
              <input
                type="text"
                value={name}
                onChange={nameChange}
                placeholder="Full Name"
                className="text-xl px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-400 w-full"
              />
            </span>
          )}
          <span>
            <input
              type="text"
              value={email}
              onChange={emailChange}
              placeholder="Email"
              className="text-xl px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-400 w-full"
            />
          </span>
          <span className="relative">
            <input
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={passwordChange}
              placeholder="Password"
              className="text-xl px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-400 w-full"
            />
            <span
              className="text-xl font-bold text-primary-400 absolute top-3 right-3 cursor-pointer"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <BsEyeSlash /> : <BsEye />}
            </span>
          </span>
          {!isSignUp && (
            <div className="ml-auto text-sm">
              <span>Forgot your password?</span>
              <span className="text-primary-400">Reset</span>
            </div>
          )}
          <button
            className="text-xl px-3 py-2 bg-primary-400 text-white rounded-md mb-5"
            onClick={handleRegister}
          >
            {loading ? <LoadingSpinner /> : isSignUp ? "Sign up" : "Login"}
          </button>
          <div className="mx-auto w-full text-center">
            <span className="border-b-2border-gray-100blockmx-automb-5pb-3">
              {isSignUp ? "or sign up with" : "or login with"}
            </span>
          </div>
          <div>
            <button className="text-xl px-3 py-2 w-full bg-blue-400 text-white rounded-md">
              <FcGoogle className="inline-block mr-2" />
              Google
            </button>
          </div>
          <div className="ml-auto">
            <span>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </span>
            <span
              className="text-primary-400 cursor-pointer ml-3"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign up"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
