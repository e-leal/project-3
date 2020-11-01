import React, { useState, useEffect } from 'react'
import "./jobs.css";
import { GET_ME, QUERY_JOB } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Navbar, Nav, Container, Modal, Tab, Button } from 'react-bootstrap';
import SubmitApplication from '../SubmitApplication';
import Jobcon from '../Jobs/Jobcon';
import ApplicationCard from '../ApplicationCard';


const JobPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [userJobData, setUserJobData] = useState({ company: '', createdAt: '', contact: '', description: '', requirements: '' });
  const token = localStorage.getItem('id_token');

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
    const { data: userData, loading:userQueryLoading } = useQuery(GET_ME);
    const { data: jobData, loading:jobLoading } = useQuery(QUERY_JOB, {
      variables: { id: jobId }
    });
    
    

    const myJob = jobData?.job || {};
    const meData = userData?.me || {};

    console.log("my job's applications are: ", myJob.jobApplications);
    console.log("Am I an employer? ", meData);
    // const job = myJob.filter(_id === jobId);
    //   if (!jobs.length) {
    //     return <h3>You have no posted jobs!</h3>
    //   }
    const isEmployersListing = (myJob.contact == meData.email && meData.employer);
    console.log("EMployer listing check is: ", isEmployersListing);
    if(!isEmployersListing){
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
            </div>
            <div>
            <Button
              type='primary'
              variant='success' onClick={() => setShowModal(true)}>
              Submit Application Here!
            </Button>
            </div>
          </div>
          
                        </div>
                    
                    {/* set modal data up */}
          <Modal
            size='lg'
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby='submitapplication-modal'>
            {/* tab container to do either signup or login component */}
              <Modal.Header closeButton>
                <Modal.Title id='submitapplication-modal'>
                  Enter Resume Link
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <SubmitApplication handleModalClose={() => setShowModal(false)} />
              </Modal.Body>
          </Modal>    
            </div>
            
        );
    }
      
    else {
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
                  </div>
                <div>
              </div>
            </div>
          </div>
        <Jobcon>
          <section>
              <div className="smallheading">
                <h3 className="card-title">Applications you have received</h3>
              </div>
          </section>
          <div>
            {userQueryLoading ? <div>Loading...</div> : <ApplicationCard applications={myJob.jobApplications} /> } 
          </div>
        </Jobcon>
      </div>
      );
    }
  }
    export default JobPage;