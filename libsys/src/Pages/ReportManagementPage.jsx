import React from 'react';
import Reports from '../components/Reports';
import BookList from '../components/BookList';

const ReportManagementPage = () => {
  // Implement your borrowing reports page content here
  return (
    <div>
      <h2> Report Management</h2>
      < Reports />
      <BookList />
      {/* Add your borrowing reports components, tables, and reports */}
    </div>
  );
};

export default ReportManagementPage;
