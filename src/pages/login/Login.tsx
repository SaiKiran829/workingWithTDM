import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/user-administration";
    navigate(path);
  };

  return (
    <div className="loginPage">
      <div className="sampleLogin">
        <h1>Login</h1>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Email ID"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" onClick={routeChange}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
