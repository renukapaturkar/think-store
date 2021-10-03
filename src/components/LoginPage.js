import React, { useState } from "react";
import "../App.css";
import "../css/Login.css";
import "../css/form.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import UserProfile from "./UserProfile";

const LoginPage = () => {
  const { token, errorMessage, loginWithUserCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginAsGuest = () => {
    setEmail("rpaturkar21@gmail.com")
    setPassword("Renuka@123")
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    await loginWithUserCredentials(email, password);
    navigate(state?.from ? state.from : "/userprofile");
  };



  return (
    <div>
      {token ? (
        <UserProfile />
      ) : (
        <div className="card1">
          <div className="logo">
            <span>Think Store</span>
          </div>
          <div className="login-card"></div>
          <form onSubmit={loginHandler} className="form-container">
            <div className="form-input">
              <input
                className="input"
                placeholder="Username or Email Address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                className="input"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <small>{errorMessage}</small>

            <button className="btn btn-dark-hover" type="submit">
              Login
            </button>
            {/* <button className="btn btn-dark-hover" onClick={loginAsGuest} type="submit">
            Login as Guest</button> */}
          </form>
          <div>
            <small>
              Don't have an account? <Link to="/signup">signup</Link>
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
