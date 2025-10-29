import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [signingUp, setSigningUp] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [userData,setUserData] = useState(false)
  const navigate = useNavigate();

  const signUp = async (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setSigningUp(true);
    try {
      const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      toast.error(resData.message);

      if (response.ok) {
        toast.success("Account created successfully.Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setSigningUp(false);
    }
  };

  const Login = async (data) => {
    setLoggingIn(true);
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      toast.error(resData.message);
      if (response.ok) {
        toast.success("Login successful.Redirecting to dashboard...");
        localStorage.setItem("token", resData.token);
        navigate("/prompt");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoggingIn(false);
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  const isAuth = async () => {
    const getToken = localStorage.getItem("token");
    if (!getToken) {
      return false;
    }
    
    try {
      const res = await fetch(`${baseUrl}/auth/verify-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken}`,
        },
      });
      const response = await res.json()
      console.log(response);
      
      setUserData(response.user)
      if (response.status == "success") {
        return true;
      } 
    } catch (error) {
      toast.error(error.message || "Something went wrong")
    }
  };
  const value = {
    signUp,
    Login,
    isAuth,
    logOut,
    signingUp,
    loggingIn,
    userData,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
