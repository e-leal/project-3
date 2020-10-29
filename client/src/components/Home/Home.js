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

      
  
    // create state to hold saved bookId values
    const [savedJobIds, setSavedJobIds] = useState(getSavedJobIds());
    const [saveJob] = useMutation(SAVE_JOB);
    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
      return () => saveJobIds(savedJobIds);
    });
  
    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await searchCareerJobs(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const jobData = items.map((job) => ({
          JobId: job._id,
          authors: job.title || ['No author to display'],
          company: job.company,
          description: job.description//,
          //image: job.volumeInfo.imageLinks?.thumbnail || '',
        }));
  
        setSearchedJobs(jobData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };
  
    // create function to handle saving a book to our database
    const handleSaveJob = async (jobId) => {
      // find the book in `searchedBooks` state by the matching id
      const jobToSave = searchedJobs.find((job) => job.jobId === jobId);
      console.log("Job to save: ", jobToSave);
      
      // get token
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
  
      try {
        const { data } =  await saveJob({
          variables: {jobData: {...jobToSave}},
        });
        console.log("My lovely data: ", data);
  
        // if book successfully saves to user's account, save book id to state
        setSavedJobIds([...savedJobIds, jobToSave.jobId]);
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <>
        <Jumbotron fluid className='text-light center bg-dark'>
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
  
        <Container>
          <h2>
            {searchedJobs.length
              ? `Viewing ${searchedJobs.length} results:`
              : 'Search for a job to begin'}
          </h2>
          <div>{loading ? <div>Loading...</div> : <JobCard jobs={myJob} /> } </div>
          {/* <CardColumns>
            {searchedJobs.map((job) => {
              return (
                <Card key={job.jobId} border='dark'>
                  {job.image ? (
                    <Card.Img src={job.image} alt={`The cover for ${job.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <p className='small'>Employeers: {job.authors}</p>
                    <Card.Text>{job.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedJobIds?.some((savedJobId) => savedJobId === job.jobId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveJob(job.jobId)}>
                        {savedJobIds?.some((savedJobId) => savedJobId === job.jobId)
                          ? 'This job has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns> */}
        </Container>
      </>
    );
  };


export default Home;