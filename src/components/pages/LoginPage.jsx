import "../styles/Auth.css";
import React, { useContext, useState } from "react";
import HeaderPage from "./HeaderPage";
import { authContext } from "@/context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import firstImg from "../Multimedia/images/1.jpg";
import secondImg from "../Multimedia/images/2.jpg";
import MarquePage from "./MarquePage";

const loginShema = yup.object({
  email: yup.string().email("Enter valid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const LoginPage = () => {
  const { Login, loggingIn } = useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginShema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    Login(data);
  };
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div>
    <div class="relative min-h-screen bg-cover bg-center auth-container">
      <HeaderPage headerLogin={"Login"}
      headerSignUp={"Signup"}
      headerLinks={"/login"}
      headerLink={"/signup"}/>
    
      <div className="form-container flex-row-reverse gap-10">
        <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-outline-container">
            <div className="name-email-container">
              <input
                type="email"
                placeholder="Enter E-Mail*"
                className="w-100"
                {...register("email")}
              />
            </div>
            <div className="password-containers w-100">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password*"
                className="w-100"
                {...register("password")}
              />
               <span className="password-icon" onClick={handleTogglePassword}>
                {showPassword ? (
                  <span class="material-symbols-outlined">visibility_off</span>
                ) : (
                  <span class="material-symbols-outlined">visibility</span>
                )}
              </span>
            </div>
          </div>
          <div className="flex justify-between mb-4 w-100 checkbox-content">
            <div>
              <input type="checkbox" className="checkbox-container" required />
              <label htmlFor="remember me">Remember me</label>
            </div>
            <div className="password-container">
              <a href="">Forgot Password</a>
            </div>
          </div>

          <div className="button-container">
            <button className="w-100" disabled={loggingIn}>
              {loggingIn ? (
                <span class="material-symbols-outlined">progress_activity</span>
              ) : (
                "Log In"
              )}
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
          <div className="text-center continue-container">
            <p>
              <span className="span-container">Or Continue With:</span>
            </p>
          </div>
          <div className="flex justify-between gap-5 google-container">
            <div className="flex">
              <button>
                <img
                  src="https://auth-cdn.oaistatic.com/assets/google-logo-NePEveMl.svg"
                  alt="google"
                />
                <span>Google</span>
              </button>
            </div>
            <div>
              <button>
                <img
                  src="https://auth-cdn.oaistatic.com/assets/apple-logo-vertically-balanced-rwLdlt8P.svg"
                  alt="apple"
                  className="invert w-10"
                />
                <span>Apple</span>
              </button>
            </div>
          </div>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <a href="/signup" className="font-bold">
                Register
              </a>{" "}
            </p>
          </div>
        </form>
        <div className="flex-container text-center">
          <div className="image-container">
            <div className="masked-image">
              <img
                src={firstImg}
                alt=""
              />
            </div>
            <div className="masked-image">
              <img
                src={secondImg}
                alt=""
              />
            </div>
          </div>
          <div>
            <p>Sign In Your Account</p>
          </div>
          <div>
            <h1>Welcome To Pixgix</h1>
          </div>
          <div>
            <button>
              <a href="/">Back To Home</a>
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <MarquePage />
    </div>
  );
};

export default LoginPage;
