import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Logo, LoadingSpinner, Input, Button } from "../../../components";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../store/context";
import img from "../../../assets/svg/breakfast.svg";

const RegisterPage = () => {
  const { setAuth } = useContext(AuthContext);
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

  const { value: username, onChange: usernameChange } = useInput(
    "",
    (value) => {
      var letters = /^[A-Za-z]+$/;

      return (
        value.length > 5 &&
        value.length < 50 &&
        value !== "" &&
        value !== null &&
        value !== undefined &&
        letters.test(value)
      );
    }
  );

  const handleRegister = async () => {
    await registerUser({
      url: `/auth/${isSignUp ? "signup" : "login"}`,
      method: "POST",
      body: {
        email: email,
        password: password,
        ...(isSignUp && { name: name, username: username }),
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
      className=" flex items-center justify-center h-screen bg-cover bg-center backdrop-blur-sm 
      "
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/03/07/35/21/360_F_307352129_dvr99c36HQ8fOUDwhn4awr710K0JqBSJ.jpg)",
      }}
    >
      <div className="bg-white p-10 rounded-lg shadow-lg backdrop-blur-3xl w-96">
        <div className="flex justify-between">
          <Logo navigate={false} />
          <h1
            className="
          text-4xl font-bold text-green-400
          dark:text-primary-400
          
          "
          >
            {isSignUp ? "Sign Up" : "Login"}
          </h1>
        </div>
        <div className="flex flex-col">
          {isSignUp && (
            <Input
              value={name}
              onChange={nameChange}
              placeholder="Full Name"
              required={true}
              rounded={true}
              outline={true}
              label="Full Name"
            />
          )}
          {isSignUp && (
            <Input
              value={username}
              onChange={usernameChange}
              placeholder="Username"
              required={true}
              rounded={true}
              outline={true}
              label="Username"
            />
          )}

          <Input
            value={email}
            onChange={emailChange}
            placeholder="Username"
            required={true}
            rounded={true}
            outline={true}
            label="Email"
          />

          <Input
            value={password}
            onChange={passwordChange}
            type="password"
            placeholder="Password"
            required={true}
            rounded={true}
            outline={true}
            label="Password"
            maxLength={20}
            min={4}
          />

          {!isSignUp && (
            <div className="ml-auto text-sm">
              <span>Forgot your password?</span>
              <span className="text-primary-400">Reset</span>
            </div>
          )}
          <Button className="my-5 text-xl font-bold" onClick={handleRegister}>
            {loading ? <LoadingSpinner /> : isSignUp ? "Sign up" : "Login"}
          </Button>
          <div className="mx-auto w-full text-center">
            <span className="border-b-2border-gray-100blockmx-automb-5pb-3">
              {isSignUp ? "or sign up with" : "or login with"}
            </span>
          </div>

          <Button
            className="my-5 text-xl font-bold"
            background="bg-blue-500 hover:bg-blue-600"
          >
            <FcGoogle className="inline-block mr-2 text-3xl" />
            Google
          </Button>

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
