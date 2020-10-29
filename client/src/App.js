import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import  ApolloClient from 'apollo-boost';
import Conduct from './components/Conduct';
import NavBar from './components/Nav/Navbar';
/*
***********
APP COMPONENT IMPORTS 
***********
*/
import HomePage from './components/Home/Home';
// import RecruiterDashboard from "../recruiter/Dashboard/Dashboard";
import JobsHome from "./components/Jobs/JobsHome";
// import JobDetailedView from './components/Jobs/JobCard';
// import SearchedJobs from "./pages/SearchJobs";
import Profile from './components/profile/profile';
// import Message from "../Message/Message";
// import CompanyPage from "../Jobs/CompanyPage";
// import JobSaved from "../Jobs/JobSaved";
import PostJob from './components/PostJob/PostJob';
// import PostJobfirst from "../PostJob/PostJobfirst";
// import SavedJobsHome from "../Jobs/SavedJobsHome";
// import JobsBySkill from "../Jobs/JobsBySkill";
// import PublicProfile from "../profile/publicprofile";
// //  import ApplicantHome from "../src/components/Home";
// import RecruiterHome from "./components/Home/RecruiterHome";
// import ListedJobs from "../recruiter/listedJobs";
// import Recruitersignup from "../Recruitersignup/Recruitersignup";
// // import ApplyJob from "../ApplyJob/Applyjob";
// // import JobApplicantsHome from "../recruiter/jobApplicantsHome";
// import RecruiterProfile from "../profile/RecruiterProfile";

const client = new ApolloClient({
  request: operation => {
    console.log("007 operation: ", operation)
    const token = localStorage.getItem('id_token');
    console.log("our client app.js is saying our token is: ", token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'http://localhost:3001/graphql'
});

function App (){
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
      <Switch>
                <Route path="/" component={HomePage} exact/>
                {/* <Route path="/recruiter" component={RecruiterDashboard} exact/> */}
                <Route path="/jobshome" component={JobsHome} exact />
                {/* <Route path="/jobdetailedview" component={JobDetailedView} exact /> */}
                {/* <Route path="/postedjobs" component={ListedJobs} exact /> */}
                <Route path="/profile" component={Profile} exact />
                {/* <Route path="/message" component={Message} exact />
                <Route path="/jobshome/savedjobs" component={SavedJobsHome} exact />
                <Route path="/searchedjobs/:criterion/:lat/:long" component={SearchedJobs} exact />
                <Route path="/searchedjobs/:title/:location" component={SearchedJobs} exact />
                <Route path="/jobsbyskill" component={JobsBySkill} exact />
                <Route path="/public-profile/:id" component={PublicProfile} exact />
                {/* <Route path="/applicanthome" component={ApplicantHome} exact /> */}
                {/* <Route path="/applicantconnection" component={ApplicantConnection} exact /> */}
                {/* <Route path="/recruiterhome" component={RecruiterHome} exact /> */}
                {/* <Route path="/recruiterconnection" component={RecruiterConnection} exact /> */}
                {/* <Route path="/jobsaved" component={JobSaved} exact />*/
                <Route path="/postjob" component={PostJob} exact />
                // <Route path="/postjobfirst" component={PostJobfirst} exact />
                // <Route path="/recruitersignup" component={Recruitersignup} exact />
                // <Route path="/apply/:id" component={ApplyJob} exact /> */}
                // {/* <Route path="/jobapplicant/:jobId" component={JobApplicantsHome} exact /> */}
                /* <Route path="/jobsaved" component={JobSaved} exact />
                <Route path="/companypage/:id" component={CompanyPage} exact />
                <Route path="/recruiterprofile" component={RecruiterProfile} exact /> */}
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
               
            </Switch>
      </Router>
      </ApolloProvider>
  );
} 

export default App;