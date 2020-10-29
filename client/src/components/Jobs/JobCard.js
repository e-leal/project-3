import React from 'react'
import "./jobs.css";

const JobCard = ({ jobs }) => {
  if (!jobs.length) {
    return <h3>You have no posted jobs!</h3>
  }
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

  <Container>
  <h2>
    {searchedJobs.length
      ? `Viewing ${searchedJobs.length} results:`
      : 'Search for a job to begin'}
  </h2>
  <CardColumns>
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
                  : 'Save this Job'}
              </Button>
            )}
          </Card.Body>
        </Card>
      );
    })}
  </CardColumns>
</Container>

export default JobCard;