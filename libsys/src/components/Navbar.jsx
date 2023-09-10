import React, { useDebugValue } from "react";
import brand1 from "../images/brand1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("User"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("User");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={brand1} alt="LIBSYS" width="150px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  to={"/"}
                  className="nav-link text-white link-underline-opacity-0"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/about"}
                  className="nav-link text-white link-underline-opacity-0"
                >
                  About
                </Link>
              </li>
              {user && user.email == "admin@123" ? (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/report"}
                      className="nav-link text-white link-underline-opacity-0"
                    >
                      Report
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Management
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={"/user-management"}
                          className="dropdown-item link-underline-opacity-0"
                        >
                          User Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/book-management"}
                          className="dropdown-item link-underline-opacity-0"
                        >
                          Book Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/borrow-management"}
                          className="dropdown-item link-underline-opacity-0"
                        >
                          Borrow Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/loan-management"}
                          className="dropdown-item link-underline-opacity-0"
                        >
                          Loan Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/reserve-management"}
                          className="dropdown-item link-underline-opacity-0"
                        >
                          Reserve Management
                        </Link>
                      </li>
                    </ul>
                  </li>{" "}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/book-list"}
                      className="nav-link text-white link-underline-opacity-0"
                    >
                      Book List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/user"}
                      className="nav-link text-white link-underline-opacity-0"
                    >
                      Reserve Book
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {user == null ? (
              <>
                <Link
                  to={"/login"}
                  className="btn btn-sm btn-outline-success mx-2"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-sm btn-outline-warning mx-2"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"#"}
                  className="nav-link text-white link-underline-opacity-0"
                >
                  {user.firstName + " "}
                </Link>
                <Link
                  to={"/login"}
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline-danger mx-2"
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
