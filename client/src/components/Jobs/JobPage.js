import React, { useState, useEffect } from 'react'
import "./jobs.css";
import { GET_ME, QUERY_JOB } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Form, Button, Alert } from 'react-bootstrap';

const JobPage = () => {

    const [userJobData, setUserJobData] = useState({ company: '', createdAt: '', contact: '', description: '', requirements: '' });


    // const {loading1, data1} = useQuery(MY_JOBS);
    //  const myJobData = data1?.user || {};
    //  console.log("my job data is:::: ", myJobData);
    // useEffect(() => {
    //let jobId = window.location.pathname.split("/")[2];

    // })
    // let jobId = window.location.pathname.split("/")[2];
    // console.log("my job id is", jobId)
    // const { loading, data } = useQuery(GET_ME);
    // const createdJobData = data?.me || [];
    // console.log(createdJobData)
    // const myJob = createdJobData.createdJobs
    // console.log("my job is", myJob)
    // const filteredJob = myJob.filter((job) => job._id === jobId)
    // console.log("filtered job", filteredJob)
    const jobId = window.location.pathname.split("/")[2];

    const { loading, data } = useQuery(QUERY_JOB, {
      variables: { id: jobId }
    });
  
    const myJob = data?.job || {};
    // const job = myJob.filter(_id === jobId);
    //   if (!jobs.length) {
    //     return <h3>You have no posted jobs!</h3>
    //   }
    return (

        <div>
                    <div className="card2">
                        <div className="content">
                          <div>
        <ul>
        <li>
        <strong>Company:</strong> {myJob.company}
        </li>
        <li>
        <strong>Job Title:</strong> {myJob.title}
        </li>
        <li>
        <strong>Requirements:</strong> {myJob.requirements}
        </li>
        <li>
        <strong>Created At:</strong>{myJob.createdAt}
        </li>
        <li>
        <strong>Contact:</strong> {myJob.contact}
        </li>

        </ul>
        <div>
        <Button
          type='primary'
          variant='success'>
          Submit Application Here!
        </Button>
        </div>
        </div>
        
      </div>
      
                    </div>
                
                    
        </div>
    );

        }

    export default JobPage;