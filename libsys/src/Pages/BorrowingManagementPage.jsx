// BorrowingManagementPage.js
import React, { useState } from "react";
import BorrowBookForm from "../components/Borrowing/BorrowingBookForm";
import BookList from "../components/BookList";
import BorrowingTable from "../components/BorrowingTable";
import Navbar from "../components/Navbar";
import "./BorrowingManagementPage.css";

const BorrowingManagementPage = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const borrowBook = async (formData) => {
    try {
      const response = await fetch("http://localhost:8083/api/borrowings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Book borrowed successfully!");
        setBorrowedBooks([...borrowedBooks, formData]);
      } else {
        alert("Error borrowing book. Please try again.");
      }
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  return (
    <div className="mb-5">
      <Navbar />
      <div className="container mt-3 mb-4">
        <h2 className="text-center mt-3 w-70 mb-3">
          Borrowing Management Page
        </h2>
        <div className="col text-center ">
          <img
            src="https://img.freepik.com/free-photo/stack-books-black-wooden-table_93675-135412.jpg?w=996&t=st=1694350233~exp=1694350833~hmac=4331282ff50f00f9eaa48888a9db23a09e6d84d69dca0dec1c34672a144b0af8"
            class="img-fluid8"
          ></img>
        </div>
        <h3 className="text-center mt-5 "> Borrow Book</h3>
        <BorrowBookForm borrowBook={borrowBook} />
      </div>
      <BorrowingTable borrowedBooks={borrowedBooks} />
    </div>
  );
};

export default BorrowingManagementPage;
