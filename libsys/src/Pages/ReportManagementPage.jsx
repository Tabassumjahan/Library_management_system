import React from "react";
import Reports from "../components/Reports";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

const ReportManagementPage = () => {
  // Implement your borrowing reports page content here
  return (
    <div>
      <Navbar />
      <h2 className="text-center mt-3"> Report Management</h2>
      <div className="col text-center w-80 "> 
          <img
            src="https://t4.ftcdn.net/jpg/04/14/53/49/240_F_414534901_q9mkwlwkYZeYT01BG68ketqi0YWYetKL.jpg" class="img-fluid w-100 h-60" ></img>
      </div>
      <Reports />
      {/* Add your borrowing reports components, tables, and reports */}
    </div>
  );
};

export default ReportManagementPage;
