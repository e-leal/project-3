import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./jobs.css";
import { Container } from 'react-bootstrap';
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { getSavedJobIds } from '../../utils/localStorage';



//import Navabar

const JobsHome = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const {loading, data} = useQuery(GET_ME);
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
    <div>
        <Container />
            <div className="jobSearchBar">
            </div>

            <section className="appliedjobs container col-md-8">
            <div className="row">


                <div className="col-md-3">
                    <span className="bluetext"> Job home</span>
                    <span className ="lightgreytext"> Applied Jobs </span>
                </div>

                <div className="col-md-3">
                    <span className="bluetext"> home </span>
                    <span className ="lightgreytext"> <Link to="/jobshome" className ="lightgreytext"> Saved Jobs </Link></span>               
                </div> 
        </div>
        </section>

        <section className="companies-info companies-info-background col-md-8" >
        
        <div className="smallheading">
					<h3>Jobs you may be interested in</h3>
		</div>
        </section>
        
        


    </div>
    )
  }

  
export default JobsHome;
  


