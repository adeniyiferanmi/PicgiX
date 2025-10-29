import React, { useContext, useState } from "react";
import HeaderPage from "./HeaderPage";
import "../styles/Auth.css";
import { authContext } from "@/context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import firstImg from "../Multimedia/images/1.jpg";
import secondImg from "../Multimedia/images/2.jpg";
import MarquePage from "./MarquePage";

const signupShema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Enter valid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupShema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const { signUp, signingUp } = useContext(authContext);


  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    signUp(data);
  };
 
  return (
    <div>
    <div class="relative min-h-screen bg-cover bg-center  auth-container">
      <HeaderPage headerLogin={"Login"}
      headerSignUp={"Signup"}
      headerLink={"/signup"}
      headerLinks={"/login"}/>

      <div className="form-container ">
        <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-outline-container">
            <div className="name-email-container">
              <input
                type="text"
                placeholder="Your Full Name*"
                className="w-100"
                {...register("fullName")}
              />
              <div>
                <input
                  type="email"
                  placeholder="Enter E-Mail*"
                  className="w-100"
                  {...register("email")}
                />
              </div>
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

            <div className="password-containers w-100" >
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password*"
                className="w-100"
                {...register("confirmPassword")}
              />
              <span
                className="password-icon"
                onClick={handleToggleConfirmPassword}
              >
                {showConfirmPassword ? (
                  <span class="material-symbols-outlined">visibility_off</span>
                ) : (
                  <span class="material-symbols-outlined">visibility</span>
                )}
              </span>
            </div>
          </div>
          <div>
            <input
              type="checkbox"
              className="checkbox-container"
              id="rememberMe"
              required
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="button-container">
            <button className="w-100" disabled={signingUp}>
              {signingUp ? (
                <span class="material-symbols-outlined">progress_activity</span>
              ) : (
                "Sign Up"
              )}
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
          <div className="text-center">
            <p>
              Already have an account?
              <a href="/login" className="font-bold">
                Login
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
            <p>Sign Up Your Account</p>
          </div>
          <div>
            <h1>Welcome To Pixgix</h1>
          </div>
          <div>
            <button>
              <a href="/">Back to Home</a>
              <span class="material-symbols-outlined relative top-2">
                arrow_outward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <MarquePage/>
      </div>
  );
};

export default SignUp;
