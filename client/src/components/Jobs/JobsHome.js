import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import Jobcon from '../components/Jobs/Jobcon';
import JobCard from '../components/Jobs/JobCard';
import { Link } from 'react-router-dom';
import "./jobs.css";
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { getSavedJobIds } from '../../utils/localStorage';



//import Navabar

const JobsHome = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const {loading, createdJobs, data} = useQuery(GET_ME);
    const userData = data?.me || {};
  
    // useEffect(() => {
    //   if (error) {
    //     setShowAlert(true);
    //   } else {
    //     setShowAlert(false);
    //   }
    // }, [error]);
  
    const handleInputChange = (event) => {
  
      const { name, value } = event.target;
      console.log(name, " is being changed to: ", value);
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      const form = event.currentTarget;
      console.log("the form is: ", form);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        console.log("our user data is: ", userFormData);
        const { data } = await getSavedJobIds({
          variables: { ...userFormData },
        });
  
        console.log("our data result is: ", data);
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setUserFormData({
        email: '',
        password: '',
      });
    };

    return (
    <Jobcon>
        <section className="companies-info companies-info-background col-md-8" >
            <div className="smallheading">
			<h3>Jobs you may be interested in</h3>
		    </div>
        </section>
    
        <JobCard>
          company={createdJobs.company}
          key={createdJobs.id}
          name={createdJobs.name}
          image={createdJobs.image}
        </JobCard>
    </Jobcon>
     )
  }

  
export default JobsHome;
  


