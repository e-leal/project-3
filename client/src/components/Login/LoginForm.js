// see SignupForm.js for comments

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "./LoginForm.css";


const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
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
    // <>
    // <div className="signup-body">
      <div className="signup-body-background">
        <div className="signup-form-lower">
          <h2 className="signup-title">Find your next Career</h2>
          <h3 className="signup-title-small">Get started today!</h3>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
              <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                Something went wrong with your login credentials!
              </Alert>
              <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  name='email'
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
              </Form.Group>
              <Button disabled={!(userFormData.email && userFormData.password)} type='submit' variant='success' className='signup-login-button'>
                Submit
              </Button>
            </Form>
        </div>
      </div>
    // </div>
  // </>     
  );
};

export default LoginForm;
