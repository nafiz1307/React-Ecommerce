import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e)=>{
      e.preventDefault();
  }
  const register =(e)=>{
      e.preventDefault();
  }

  return (
    <div className="login">
      <img src={loginImage} alt="Login" className="loginImage" />
      <div className="login_container">
        <h4>Sign In</h4>
        <form>
          <h6>E-mail</h6>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>Password</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            class="btn waves-effect waves-light login_signin"
            type="submit"
            onClick={signin}
          >
            Sign in
            <i class="material-icons right">send</i>
          </button>
        </form>
        <button class="waves-effect waves-light btn login_signup" onClick={register}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;