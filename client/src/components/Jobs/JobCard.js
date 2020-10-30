import React from 'react'
import { Button, Container, Card, CardColumns } from 'react-bootstrap';
import "./jobs.css";

const JobCard = ({ jobs }) => {
<<<<<<< HEAD
  if (!jobs.length) {
    return <h3>You have no posted jobs!</h3>
  }
  return (
=======
  // if (!jobs.length) {
  //   return <h3>You have no posted jobs!</h3>
  // }
  return (

<div>
  { jobs &&
  jobs.map((job) => (
    <div className="card">
      <div className="content">
        <ul>
        <li>
        <strong>Company:</strong> {job.company}
        </li>
        <li>
        <strong>Job Title:</strong> {job.title}
        </li>
        <li>
        <strong>Requirements:</strong> {job.requirements}
        </li>
        <li>
        <strong>Created At:</strong>{job.createdAt}
        </li>
        <li>
        <strong>Contact:</strong> {job.contact}
        </li>

        </ul>

      </div>
      </div>
           ))}

    </div>
  );
  };
>>>>>>> jesus-three

<Container>
  <CardColumns>
    {jobs && jobs.map((job) => {
      return (
        <Card key={job.jobId} border='dark'>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Text>{job.requirements}</Card.Text>
            <Card.Text>{job.createdAt}</Card.Text>
            <p className='small'>Employeers: {job.company}</p>
            <Card.Text>{job.description}</Card.Text>
            {Auth.loggedIn() && (
              <Button
                disabled={savedJobIds?.some((savedJobId) => savedJobId === job.jobId)}
                className='btn-block btn-info'
                onClick={() => handleSaveJob(job.jobId)}>
                {savedJobIds?.some((savedJobId) => savedJobId === job.jobId)
                  ? 'This job has already been saved!'
                  : 'Save this Job'}
              </Button>
            )}
          </Card.Body>
        </Card>
      );  
      })}
  </CardColumns>
</Container>
  );
};

export default JobCard;