import React from 'react';
import LoanManagement from '../components/LoanManagement';
import BookList from '../components/BookList';
import Navbar from '../components/Navbar';
import './LoanManagementPage.css'
const LoanManagementPage = () => {
  return (
    <div className="mb-4">
      <Navbar />
       <h2 className= " text-center border-bottom w-60 mt-3 mb-3">Loan Management</h2>
      <div className="col text-center w-80 "> 
          <img
            src="https://img.freepik.com/free-photo/creative-world-book-day-composition_23-2148883781.jpg?w=996&t=st=1694350801~exp=1694351401~hmac=1769088a8a1cb938dd71c7b5007e2e1d978e1abfe3cd48219bd1892fc7db6d23" class="img-fluid15"></img>
      </div>
      < LoanManagement />
    </div>
  );
};

export default LoanManagementPage;
