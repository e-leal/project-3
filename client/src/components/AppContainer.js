import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Signup from './Signup';
import SearchJobs from './pages';

function Homepage() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Signup':
        return <Signup />;
      case 'Search Jobs':
        return <SearchJobs />;
      case 'User Profile':
        return <UserProfile />;
      case 'Resume':
        return <Resume />;
        default:
          return <Homepage />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Homepage;