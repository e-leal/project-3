import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_JOB } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "./PostJob.css";

//import Navbar

const PostJob = () => {
  const [userFormData, setUserFormData] = useState(
    {
    company: '',
    title: '',
    createdAt: '',
    contactemail: '', 
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [postjob, { error }] = useMutation(CREATE_JOB);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
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
      const { data } = await postjob({
        variables: { ...userFormData },
      });

      console.log("our data result is: ", data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      company: '',
      title: '',
      createdAt: '',
      contactemail: '', 
    });
  };

    return (
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your Job Posting!
      </Alert>
      <div className="div">

        <div className="container-fluid containerstyle">
          <div style={{clear : "both", paddingTop: "32px"}}>
            <p className="lead jobtext"  style={{marginLeft: ""}}>
              Reach quality candidates.
            </p>
          </div>

          <form className="jobform">
            <div className="form-group filter-message-box">
                <i className="fa fa-building"> </i>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Company"
                // onChange={this.onChange}
                name="company"
              />
            </div>
            <div className="form-group filter-message-box">
            <i className="fa fa-suitcase"> </i>
              <input
                type="text"
                className="form-control"
                id="jobtitle"
                placeholder="Job title"
                // onChange={this.onChange}
                name="jobtitle"
              />
            </div>

            <div className="form-group filter-message-box">
            <i className="fa fa-map-marker"> </i>
              { <input
                type="text"
                className="form-control"
                id="jobaddress"
                placeholder="Job Address or City"
                name="jobaddress"
              /> }
            </div>
            <div className="form-group filter-message-box">
                <i className="fa fa-building"> </i>
              <input
                type="text"
                className="form-control"
                id="Salary"
                placeholder="Salary"
                // onChange={this.onChange}
                name="Salary"
              />
            </div>
            
            <Button
              type="button"
              class="btn btn-lg submitbutton wow-page__submit-button"
              // onClick={this.handleJobPost}
            >
              Post Job
            </Button>
          </form>
        </div>
      </div>
      </Form>
    );
  }

export default PostJob;
