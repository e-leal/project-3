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
      <div className="job-detail">
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


export default JobCard;