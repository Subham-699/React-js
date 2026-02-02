import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <button className="close-btn">×</button>

        <h2>Login Form</h2>

        <div className="form-group">
          <label>Email or Phone</label>
          <input type="text" placeholder="Enter email or phone" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <a href="#" className="forgot">
          Forgot Password?
        </a>

        <button className="login-btn">LOGIN</button>

        <p className="signup-text">
          Not a member? <span>Signup now</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;