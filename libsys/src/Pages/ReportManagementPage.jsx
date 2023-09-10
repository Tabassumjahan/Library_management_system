import React from "react";
import Reports from "../components/Reports";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";
import './ReportManagement.css'
const ReportManagementPage = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-center mt-3 mb-3"> Report Management</h2>
      <div className="col text-center w-80 container"> 
          <img
            src="https://img.freepik.com/free-photo/library-with-round-window-bookcase-with-bookcase-left_188544-9023.jpg?w=1380&t=st=1694346591~exp=1694347191~hmac=47ed8d9fec277aea54f889733e2cbacac131ef2f902198c4d0870c4a8647fa2c" class="img-fluid5"></img>
      </div>
      <Reports />
    </div>
  );
};

export default ReportManagementPage;
