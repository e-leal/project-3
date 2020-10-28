import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import Login from './components/Login/LoginForm';
import Profile from '../components/profile/profile';
import Home from '../components/Home/Home.js'

function Conduct() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Profile':
        return <Profile />;
      case 'Login':
        return <Login />;
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