import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../../utils/mutations';
//import { createUser } from '../utils/API';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', name: '', number: '', employer: (false) });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, {error}] = useMutation(ADD_USER);

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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log("our user form data is: ", userFormData);
      const {data} = await addUser({
        variables: {email: userFormData.email, name: userFormData.name, number: userFormData.number, username: userFormData.username, employer: userFormData.employer, password: userFormData.password}
      });
      console.log("our data is: ", data)
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      number: '',
      name: '',
      employer: false
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='name'>First &amp; Last Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Jon Smith'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Phone Number is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='number'>Phone Number</Form.Label>
          <Form.Control
            type='number'
            placeholder='xxx-xxx-xxxx'
            name='number'
            onChange={handleInputChange}
            value={userFormData.number}
            required
          />
          <Form.Control.Feedback type='invalid'>Phone Number is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="employer">Are you an employer?</Form.Label>
          <Form.Control
            as="select" name="employer" onChange={handleInputChange}
            value={userFormData.employer}
            required defaultValue={false}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </Form.Control>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='primary'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
