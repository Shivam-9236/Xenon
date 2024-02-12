import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async () => {
    const { username, email, password, confirmPassword } = user;
    console.log(user);
    if (username && email && password && password === confirmPassword) {
      const res = await userRegister(user);
      alert(res.data.message);
      navigate("/login");
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="mobileNo"
          value={user.mobileNo}
          placeholder="Enter mobile number"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Register;
