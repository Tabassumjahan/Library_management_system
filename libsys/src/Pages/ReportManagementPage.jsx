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
      <Reports />
      {/* Add your borrowing reports components, tables, and reports */}
    </div>
  );
};

export default ReportManagementPage;
