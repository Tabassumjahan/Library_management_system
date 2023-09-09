import React from "react";
import { useState } from "react";
import { userRegister } from "../../modules/UserModule";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerUser = async () => {
    try {
      const res = await userRegister(user);
      if (res.success) {
        console.log("User regitered");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center row">
      <div className="col">
        <img
          className="register-img"
          src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
        />
      </div>
      <div className="container d-flex justify-content-center align-items-center h-100 col">
        <div className="" style={{ width: "50%" }}>
          <h2>Register</h2>
          <div class="mb-3 ">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Jane"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div class="mb-3 ">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Doe"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div class="mb-3 ">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="***********"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <p className="text-primary mt-2"> Existing User? Login here</p>
          <div className="mt-3">
            <button
              className="btn btn-outline-warning btn"
              onClick={registerUser}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
