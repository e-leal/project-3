import React, { useState, useEffect }  from "react";
import { NavLink } from "react-router-dom";
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { searchCareerJobs } from '../../utils/API';
import { saveJobIds, getSavedJobIds } from '../../utils/localStorage';
//import {REMOVE_BOOK, SAVE_BOOK, ADD_USER, LOGIN_USER} from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_ME, QUERY_JOBS } from '../../utils/queries';
import {SAVE_JOB} from '../../utils/mutations';
import JobCard from '../Jobs/JobCard';
import '../../index.css'
//import {LOGIN_USER} from '../utils/mutations';

const Home = () => {
    // create state for holding returned google api data
    const [searchedJobs, setSearchedJobs] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    const {loading, data} = useQuery(GET_ME);
    const createdJobData = data?.me || [];
    console.log(createdJobData)
      const myJob = createdJobData.createdJobs

    
    useEffect(() => {
      fetch(`http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&q`)
      .then((respone) => respone.json())
      .then((json) => setData(json));
    }, []);
 
  
    return (
      <>
        <Jumbotron fluid id='dark-purple' className='text-light center purple-mountain'>
          <Container>
            <h3>Find your next job</h3>
            <Form onSubmit={handleFormSubmit}>
              <Form.Row>
                <Col xs={3} md={8}>
                  <Form.Control
                    className='center'
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size=''
                    placeholder='Search for a Job'
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Button type='submit' variant='primary' size=''>
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>
  
        <Container id="light-purple">
          <h2>
            {searchedJobs.length
              ? `Viewing ${searchedJobs.length} results:`
              : 'Search for a job to begin'}
          </h2>
          <div>{loading ? <div>Loading...</div> : <JobCard jobs={myJob} /> } </div>
        </Container>
      </>
    );
  };


export default Home;