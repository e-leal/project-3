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
    requirements: '',
    contact: '',
    description: '' 
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [createJob, { error }] = useMutation(CREATE_JOB);

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
      const { data } = await createJob({
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
      requirements: '',
      email: '', 
      description: ''
    });
  };

    return (
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your Job Posting!
      </Alert>
      <div className="div">

        <div className="container-fluid containerstyle">
          <div style={{clear : "both", paddingTop: "40px"}}>
            <p className="lead jobtext"  style={{marginLeft: "39%"}}>
              Reach quality candidates
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
                onChange={handleInputChange}
                name="company"
              />
            </div>
            <div className="form-group filter-message-box">
            <i className="fa fa-suitcase"> </i>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Job title"
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group filter-message-box">
            <i className="fa fa-map-marker"> </i>
              { <input
                type="text"
                className="form-control"
                id="requirements"
                placeholder="Responsiablitys"
                onChange={handleInputChange}
                name="requirements"
              /> }
            </div>
            <div className="form-group filter-message-box">
                <i className="fa fa-building"> </i>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Contact Email"
                onChange={handleInputChange}
                name="contact"
              />
            </div>
            <div className="form-group filter-message-box">
                <i className="fa fa-building"> </i>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Job Description"
                onChange={handleInputChange}
                name="description"
              />
            </div>
            
            <Button disabled={!(userFormData.company && userFormData.title && userFormData.requirements && userFormData.contact)}
              type="primary"
              variant="success"
              className="btn btn-lg submitbutton wow-page__submit-button">
              Post Job
            </Button>
          </form>
        </div>
      </div>
      </Form>
    );
  }

export default PostJob;
