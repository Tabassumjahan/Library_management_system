import React from 'react';
import LoanManagement from '../components/LoanManagement';
import BookList from '../components/BookList';
import Navbar from '../components/Navbar';
const LoanManagementPage = () => {
  // Implement your loan management page content here
  return (
    <div>
              <Navbar />

          < LoanManagement />
          < BookList />
      {/* Add your loan management components, tables, and reports */}
    </div>
  );
};

export default LoanManagementPage;
