import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import Jobcon from './Jobcon';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';
import "./jobs.css";
import { GET_ME, QUERY_JOBS } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { getSavedJobIds } from '../../utils/localStorage';



//import Navabar

const JobsHome = () => {
    const [userJobData, setUserJobData] = useState({ company: '', createdAt: '', contact: '', description: '', requirements: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // const {loading1, data1} = useQuery(MY_JOBS);
    //  const myJobData = data1?.user || {};
    //  console.log("my job data is:::: ", myJobData);
    const {loading, data} = useQuery(GET_ME);
    const createdJobData = data?.me || [];
    console.log(createdJobData)
      const myJob = createdJobData.createdJobs
    // //  const {createdJobs} = myJob;
    // console.log("our created jobs might be: ", myJob);
    console.log("Our user job data is: ", createdJobData);
    // const tasks = Object.values(myJob.createdJobs);
    // console.log("my tasks are: ", tasks)
  
    // const { data } = await createdJobs({
    //           variables: { ...userFormData },
    //      });

    // useEffect(() => {
    //   if (error) {
    //     setShowAlert(true);
    //   } else {
    //     setShowAlert(false);
    //   }
    // }, [error]);
  
    // const handleInputChange = (event) => {
  
    //   const { name, value } = event.target;
    //   console.log(name, " is being changed to: ", value);
    //   setUserFormData({ ...userFormData, [name]: value });
    // };
  
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
      
    //   const form = event.currentTarget;
    //   console.log("the form is: ", form);
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
    //   try {
    //     console.log("our user data is: ", userFormData);
    //     const { data } = await getSavedJobIds({
    //       variables: { ...userFormData },
    //     });
  
    //     console.log("our data result is: ", data);
    //     Auth.login(data.login.token);
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    //   // clear form values
    //   setUserFormData({
    //     email: '',
    //     password: '',
    //   });
    // };

    return (
    <Jobcon>
        <section className="companies-info companies-info-background col-md-8" >
            <div className="smallheading">
			<h3>Jobs you may be interested in</h3>
		    </div>
        </section>
    <div>{loading ? <div>Loading...</div> : <JobCard jobs={myJob} /> } </div>

    </Jobcon>
     )
  }

  
export default JobsHome;
  
