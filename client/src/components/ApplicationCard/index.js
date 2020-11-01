import React from 'react'
import '../Jobs/jobs.css';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ applications }) => {

  console.log(applications)
  // if (!jobs.length) {
  //   return <h3>You have no posted jobs!</h3>
  // }
  return (

<div>
  { applications &&
  applications.map((application) => (
<div>

   <div className="card">
      <div className="content">
        <ul>
        <li>
        <strong>Contact:</strong> {application.contact}
        </li>
        <li>
        <strong>Resume Link:</strong> {application.resume}
        </li>
        {/* <li>
        <strong>Status:</strong> {application.status}
        </li> */}
        <li>
        <strong>Created At:</strong>{application.createdAt}
        </li>


        </ul>

      </div>
      </div>
      </ div>
           ))}

    </div>
  );
  };


export default ApplicationCard;