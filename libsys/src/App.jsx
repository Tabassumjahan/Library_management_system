import "./App.css";
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
  const [currentPage, setCurrentPage] = useState("book"); // You can manage the current page state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("user");
  const [userData, setUserData] = useState({});

  //   const handleLogin = (selectedRole) => {
  //     setUserRole(selectedRole);
  //     setIsLoggedIn(true);
  //   };

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
    //     <div className="">
    //       <header className="">
    //         {isLoggedIn && userRole === "admin" && (
    //           <>
    //             <div>
    //               <nav className="app-nav">
    //                 {/* Add navigation or a menu to switch between pages */}
    //                 <button onClick={() => setCurrentPage("user")}>
    //                   User Management
    //                 </button>
    //                 <button onClick={() => setCurrentPage("bookmanagement")}>
    //                   Book Management
    //                 </button>
    //                 <button onClick={() => setCurrentPage("borrowing")}>
    //                   Borrowing Management
    //                 </button>
    //                 <button onClick={() => setCurrentPage("loan")}>
    //                   Loan Management
    //                 </button>
    //                 <button onClick={() => setCurrentPage("Reports")}>
    //                   Reports
    //                 </button>
    //                 <button onClick={() => setCurrentPage("reservation")}>
    //                   Reservation Management
    //                 </button>
    //               </nav>
    //             </div>
    //           </>
    //         )}
    //       </header>

    //       <main className="app-main">
    //         {isLoggedIn ? ( // Check if the user is logged in
    //           <>
    //             {userRole === "user" ? (
    //               <>
    //                 <h2>User Dashboard</h2>
    //                 <BookList />
    //                 <UserPage userData={userData} />
    //                 {/* Render the buttons for borrowing, returning, loan availability, and reserve here */}
    //                 {/* Implement functionality for these buttons */}
    //               </>
    //             ) : (
    //               <>
    //                 <h2>Admin Dashboard</h2>
    //                 {currentPage === "book" && (
    //                   <section>
    //                     <div className="app-main books-section">
    //                       <h2>Books</h2>
    //                       <BookList />
    //                       {/* Content for the Books section */}
    //                     </div>
    //                   </section>
    //                 )}

    //                 {currentPage === "bookmanagement" && (
    //                   <section>
    //                     <div className="app-main books-section">
    //                       <h2>Book Management</h2>
    //                       <BookManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //                 {currentPage === "user" && (
    //                   <section>
    //                     <div className="app-main users-section">
    //                       <UserManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //                 {currentPage === "borrowing" && (
    //                   <section>
    //                     <div className="app-main borrowing-section">
    //                       <h2>BORROW/RETURN a Book</h2>
    //                       <BorrowingManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //                 {currentPage === "loan" && (
    //                   <section>
    //                     <div className="app-main loan-section">
    //                       <LoanManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //                 {/* Add this line */}
    //                 {currentPage === "Reports" && (
    //                   <section>
    //                     <div className="app-main reports-section">
    //                       <ReportManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //                 {currentPage === "reservation" && (
    //                   <section>
    //                     <div className="app-main reservation-section">
    //                       <ReservationManagementPage />
    //                     </div>
    //                   </section>
    //                 )}
    //               </>
    //             )}
    //           </>
    //         ) : (
    //           // Render the LoginPage component when not logged in
    //           <LoginPage setUserRole={setUserRole} setIsLoggedIn={setIsLoggedIn} />
    //         )}

    //         {/* Add a home page or dashboard component */}
    //         <typography> </typography>
    //         <></>
    //       </main>
    //     </div>
  );
}

export default App;
