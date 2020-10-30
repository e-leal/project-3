import React, { useState, useEffect } from 'react';
import { Container, Card, CardColumns, Button } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { saveJob, searchCareerJob } from '../utils/API';
import { saveJobIds, getSavedJobIds } from '../utils/localStorage';
import "./jobs.css";

const JobCard = () => {
   // create state for holding returned google api data
   const [searchedJobs, setSearchedJobs] = useState([]);
   const [searchInput, setSearchInput] = useState('');
 
   // create state to hold saved jobId values
   const [savedJobIds, setSavedJobIds] = useState(getSavedJobIds());
 
   // set up useEffect hook to save `savedJobIds` list to localStorage on component unmount
   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
   useEffect(() => {
     return () => saveJobIds(savedJobIds);
   });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await searchCareerJob(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const jobData = items.map((job) => ({
          jobId: job.id,
          company: job.company || ['No Company to display'],
          title: job.title,
          description: job.description,
          requirments: job.requirements,
        }));
  
        setSearchedJobs(jobData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };

  //function that handle saving jobs
  const handleSaveJob = async (jobId) => {
    // find the job in `searchedjob` state by the matching id
    const bookToSave = searchedJobs.find((jobs) => book.JobsId === JobsId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveJobs(jobsToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if job successfully saves to user's account, save job id to state
      setSavedJobIds([...savedJobIds, jobToSave.JobId]);
    } catch (err) {
      console.error(err);
    }
  };


  // if (!jobs.length) {
  //   return <h3>You have no posted jobs!</h3>
  // }
  // return (

    <Container>
        <h2>
          {Jobs.length
            ? `Viewing ${jobs.length} results:`
            : ''
            }
        </h2>
      <CardColumns>
        {job.map((job) => {
          return (
            <Card key={job.jobId} border='dark'>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <p className='small'>company: {job.company}</p>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text>{job.requirments}</Card.Text>
                {Auth.loggedIn() && (
                  <Button
                    disabled={savedJobIds?.some((savedJobId) => savedJobId === job.jobId)}
                    className='btn-block btn-info'
                    onClick={() => handleSaveJob(job.jobId)}>
                    {savedJobIds?.some((savedJobId) => savedJobId === job.jobId)
                      ? 'Apply to this Job'
                      : 'Save this Job'}
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  }

export default JobCard;