import React, { useState, useEffect } from "react";
import "./Reports.css";
function Reports() {
  // State to manage report data
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch report data from your backend API here and set it using setReports
    // Example API call:
    fetch("http://localhost:8083/api/reports")
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div className="container">
      <h3 className=" text-center">Reports</h3>

      <table className="custom-table2">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>User Activity</th>
            <th>Book Status</th>
            <th>Fine Collected</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.ReportID}>
              <td>{report.reportID}</td>
              <td>{report.userActivity}</td>
              <td>{report.bookStatus}</td>
              <td>{report.fineCollected}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
