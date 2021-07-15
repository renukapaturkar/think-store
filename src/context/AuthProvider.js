import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { toastText } from "../utils/toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    setupAuthHeaderForServiceCalls(token);
    setToken(token);
    setUserDetails(userDetails);
  }, []);

  function setupAuthHeaderForServiceCalls(token) {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  }

  const loginWithUserCredentials = async (email, password) => {
    try {
      const {
        status,
        data: { success, token, userData },
      } = await axios.post(
        "https://serene-lowlands-13656.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );

      if (status === 200) {
        setToken(token);
        console.log(token);
        setUserDetails(userData);
        setupAuthHeaderForServiceCalls(token);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userData", JSON.stringify(userData));
        toastText("Logged in! Grab your favorites!");
      }
    } catch (error) {
      console.log("err", error);
      if (error.response.status === 404) {
        setErrorMessage("email or password is incorrect");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userDetails,
        setUserDetails,
        errorMessage,
        setErrorMessage,
        loginWithUserCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
