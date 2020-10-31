import React from 'react'
import "./jobs.css";
import { Link } from 'react-router-dom';
import Home from './Home/Home';

const JobCard = ({ jobs }) => {

  console.log(jobs)
  // if (!jobs.length) {
  //   return <h3>You have no posted jobs!</h3>
  // }
  return (

<div>
  { jobs &&
  jobs.map((job) => (
    <Link to={`/jobpage/${job._id}`}>
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
      </ Link>
           ))}

    </div>
  );
  };


export default JobCard;