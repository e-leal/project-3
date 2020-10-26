import React, { useState } from 'react';
import NavBar from './Nav';
import Signup from '../components/Signup';
import SearchJobs from '../pages/SearchJobs';

function Homepage() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Signup':
        return <Signup />;
      case 'Search Jobs':
        return <SearchJobs />;
//      case 'User Profile':
//        return <UserProfile />;
        default:
          return <Homepage />;
    }
  };

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Homepage;