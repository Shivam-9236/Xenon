import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/api";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    const res = await userLogin(user);
    alert(res.data.message);
    setLoginUser(res.data.user);
    sessionStorage.setItem("user", JSON.stringify(res.data.user));
    navigate("/");
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
