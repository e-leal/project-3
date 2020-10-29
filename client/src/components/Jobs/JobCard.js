import React from 'react'
import "./jobs.css";

const JobCard = ({jobs}) => {
  if(!jobs.length){
    return <h3>You have no posted jobs!</h3>
  }
    return (

      <div className="row left-job-detail">
           {jobs &&
           jobs.map((job) => (
            <div className="col-md-10 left-job-detail-desc">
              <div className="heading-company3">
              {job.company}
              </div>
              <div className="heading-company4">
              {job.title}
              </div>
              <div className="heading-location3">
              {job.requirements}
              </div>
              <div>
              {job.createdAt}
               </div>
              <div className="heading-company4">
              {job.contact}
              </div>
              </div>
           ))}
              
      </div>
    );
  };


export default JobCard;