import React, { useState, useEffect, useRef }  from "react";
import { Jumbotron, Container, Col, Form, Button, ListGroup } from 'react-bootstrap';
import '../../index.css'

const Home = () => {
    // create state for holding returned google api data
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState('');
    const focusSearch = useRef(null)

    
    useEffect(() => {focusSearch.current.focus()}, [])


    //Fetch data from API
    const getJobs = async (query) => {
      const results = await fetch(`http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&q=${query}`, {
        headers: {'accept': 'application/json'}
    })
    const jobData = await results.json()
    return jobData.results

  }
    //Stops the flicker has user types
    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    // Renders when query is CHANGED
    useEffect (() => {
      let currentQuery = true
      const controller = new AbortController()

      const loadJobs = async () => {
        if (!query) return setJobs([])

        await sleep(350)
        if (currentQuery) {
          const jobs = await getJobs(query, controller)
          setJobs(jobs)
        }
      }
      loadJobs()

      return () => {
        currentQuery = false
        controller.abort()
      }
    }, [query])
    //RENDER JOBS
    let jobComponents = jobs.map((job, index) => {
      return (
        <ListGroup.Item key={index} action variant="secondary">
          {job.job}
        </ListGroup.Item>
      )
    })     
    //RENDER COMPS
    return (
       <>
        <Jumbotron fluid id='dark-purple' className='text-light center purple-mountain'>
          <Container>
            <h3>Find your next Career</h3>
            <Form id="search-form">
              <Form.Row>
                <Col xs={3} md={8}>
                  <Form.Control
                    className='center'
                    type="text"
                    ref={focusSearch}
                    onChange={(e) => setQuery(e.target.value)}
                    value ={query}
                    placeholder='Search for a Job'
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Button type='submit' variant='primary' size=''>
                    Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>
  
        <Container id="light-purple">
          <ListGroup>
          <h2>
           {jobComponents}
          </h2>
          </ListGroup>
          {/* <div>{loading ? <div>Loading...</div> : <JobCard jobs={myJob} /> } </div> */}
        </Container>
      </>
    );
  };


export default Home;