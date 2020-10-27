import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import Signup from './Signup';
import SearchJobs from '../pages/SearchJobs';
import Home from '../components/Home/Home.js'

function Conduct() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Signup':
        return <Signup />;
      case 'Search Jobs':
        return <SearchJobs />;
        default:
          return <Home />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default Conduct;