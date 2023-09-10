import React, { useState, useEffect } from "react";

function Reports() {
  
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/api/reports")
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div className="container">
      <h3 className=" text-center mt-4 border-bottom w-80">Reports</h3>

      <table className="table table-stripped mt-3">
        <thead>
          <tr>
            <th scope="col">Report ID</th>
            <th scope="col">User Activity</th>
            <th scope="col">Book Status</th>
            <th scope="col">Fine Collected</th>
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
