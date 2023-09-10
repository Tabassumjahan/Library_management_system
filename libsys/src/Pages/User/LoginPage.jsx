// LoginPage.jsx
import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { userLogin } from "../../modules/UserModule";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import './LoginPage.css'

function LoginPage({ setUserRole, setIsLoggedIn }) {
  const user = localStorage.getItem("User");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const res = await userLogin({
        email: username,
        password: password,
      });
      if (res.success) {
        localStorage.setItem("User", JSON.stringify(res.data));
        dispatch(setUser(res.data));
        console.log("user logged in");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center row">
      <div className="col">
        <img
          className="login-img"
          src="https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100 col">
        <div className="" style={{ width: "50%" }}>
          <h2>Login</h2>
          <div class="mb-3 ">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <label className="form-label w-50">Select Role:</label>
            <select
              className="form-select"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <p className="text-primary mt-2"> New User? Register here</p>
          <div className="mt-3">
            <button
              className="btn btn-outline-success btn"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
