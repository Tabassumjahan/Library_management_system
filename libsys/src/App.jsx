
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserManagementPage from "./Pages/UserManagementPage";
import BookManagementPage from "./Pages/BookManagementPage";
import BorrowingManagementPage from "./Pages/BorrowingManagementPage";
import LoanManagementPage from "./Pages/LoanManagementPage";
import ReportManagementPage from "./Pages/ReportManagementPage";
import ReservationManagementPage from "./Pages/ReservationManagementPage";
import UserPage from "./Pages/User/UserPage";
import BookList from "./components/BookList";
import LoginPage from "./Pages/User/LoginPage";
import Register from "./Pages/User/Register";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import About from "./Pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState("book"); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const [userData, setUserData] = useState({});

 

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/book-management" element={<BookManagementPage />} />
          <Route
            path="/borrow-management"
            element={<BorrowingManagementPage />}
          />
          <Route path="/reserve-management" element={<ReservationManagementPage />} />
          <Route path="/loan-management" element={<LoanManagementPage />} />
          <Route path="/report" element={<ReportManagementPage />} />
          <Route path="/book-list" element={<BookList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
