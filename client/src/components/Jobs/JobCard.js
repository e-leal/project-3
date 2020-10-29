import React from 'react'
import "./jobs.css";

function JobCard(props) {
    return (
      <div className="row left-job-detail">
           
              <div className="col-md-10 left-job-detail-desc">
              <div className="heading-company3">
              {props.company}
              </div>
              <div className="heading-company4">
              {props.title}
              </div>
              <div className="heading-location3">
              {props.requirements}
              </div>
              <div>
              {props.createdAt}
               </div>
              <div className="heading-company4">
              {props.contact}
              </div>
              </div>
      </div>
    )
  }


export default JobCard;