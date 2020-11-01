import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { CREATE_APP } from '../../utils/mutations';
//import { createUser } from '../utils/API';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';

const SubmitApplication = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ resume: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createApplication, {error}] = useMutation(CREATE_APP);

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

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    const token = localStorage.getItem('id_token');

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log("our user form data is: ", userFormData);
      const {data} = await createApplication({
        variables: {resume: userFormData.resume}
      });
      console.log("our data is: ", data)
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      resume: ''
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your Application submission!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='resume'>Resume Link</Form.Label>
          <Form.Control
            type='text'
            placeholder='https://docs.google.com/resume.doc'
            name='resume'
            onChange={handleInputChange}
            value={userFormData.resume}
            required
          />
          <Form.Control.Feedback type='invalid'>A resume link is required!</Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(userFormData.resume )}
          type='primary'
          variant='success'>
          Submit
        </Button>
      </Form>
      
    </>
  );
};

export default SubmitApplication;
