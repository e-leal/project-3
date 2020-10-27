import React, { useState } from 'react';
import NavTabs from '../NavTabs/NavTabs';
import Signup from '../Signup';
import SearchJobs from '../../pages/SearchJobs';

function AppContainer() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Signup':
        return <Signup />;
      case 'Search Jobs':
        return <SearchJobs />;
        default:
          return <AppContainer />;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default AppContainer;