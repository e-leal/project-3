import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./jobs.css";
import { Container } from 'react-bootstrap';
import {GET_ME} from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';



//import Navabar

const JobsHome = () => {
    //const [showAlert, setShowAlert] = useState(false);
    //const [userFormData, setUserFormData] = useState({username: '', email: '', employer: '', createdJobs: '', createdApplication: ''})
    // const { loading, data } = useQuery(GET_ME);
    // const userData = data?.me || {};
    // console.log("user data is: ", userData);
    // useEffect(() => {
    //     if (error) {
    //       setShowAlert(true);
    //     } else {
    //       setShowAlert(false);
    //     }
    //   }, [error]);

    // Bringing the jobs according to the skill set of the user
    // async componentDidMount(){
    //     var headers = new Headers();
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmVlN2VkMmM0YmYxNzRkMWNkYTc4NzkiLCJyb2xlIjoiYXBwbGljYW50IiwiaWF0IjoxNTQyNTc2Mzc4fQ.BHLiKXbJJ5KxwxwhvFty5e0VFHhdZ_QPZcjKwE_Xjjg"
	// 	const config = {
	// 		headers: 
	// 		{ 
	// 			'Authorization': 'Bearer ' + token
	// 		}
	// 	};
	// 	axios.defaults.withCredentials = true;
    //     let ret = await api('GET','/users/5bee7ed2c4bf174d1cda7879',config);
    //     var skills_set = ret.data.payLoad.user.skills;
    //     let ret = await api('GET','search/jobs',config);
        

    //     // console.log("data1",temp.data.payLoad);

    // }

    // if (loading) {
    //     return <h2>LOADING...</h2>;
    //   }

    return (
    <div>
        <Container />
            <div className="jobSearchBar">
            </div>

            <section className="appliedjobs container col-md-8">
            <div className="row">


                <div className="col-md-3">
                    <span className="bluetext"> Job home</span>
                    <span className ="lightgreytext"> Applied Jobs </span>
                </div>

                <div className="col-md-3">
                    <span className="bluetext"> home </span>
                    <span className ="lightgreytext"> <Link to="/jobshome/savedjobs" className ="lightgreytext"> Saved Jobs </Link></span>               
                </div> 
        </div>
        </section>

        <section className="companies-info companies-info-background col-md-8" >
        
        <div className="smallheading">
					<h3>Jobs you may be interested in</h3>
		</div>
        </section>
        
        


    </div>
    )
  }

  
export default JobsHome;
  


