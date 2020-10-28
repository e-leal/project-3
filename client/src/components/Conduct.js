<<<<<<< HEAD
// import React, { useState } from 'react';
// import Navbar from './Nav/Navbar';
// import Login from './components/Login/LoginForm';
// import Profile from '../components/profile/profile';
// import Home from '../components/Home/Home.js'
=======
import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import Login from '../components/Login/LoginForm';
import Profile from '../components/profile/profile';
import Home from '../components/Home/Home.js'
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95

// function Conduct() {
//   const [currentPage, handlePageChange] = useState('Home');

<<<<<<< HEAD
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'Profile':
//         return <Profile />;
//       case 'Login':
//         return <Login />;
//         default:
//           return <Home />;
//     }
//   };
=======
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
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95

//   return (
//     <div>
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       <div>{renderPage(currentPage)}</div>
//     </div>
//   );
// }

// export default Conduct;