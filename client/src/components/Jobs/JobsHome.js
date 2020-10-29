import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./jobs.css";
import { Container } from 'react-bootstrap';
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { getSavedJobIds } from '../../utils/localStorage';



//import Navabar

const JobsHome = () => {
<<<<<<< HEAD

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
        

//     //     // console.log("data1",temp.data.payLoad);

//     // }
=======
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const {loading, data} = useQuery(GET_ME);
    const userData = data?.me || {};
  
    // useEffect(() => {
    //   if (error) {
    //     setShowAlert(true);
    //   } else {
    //     setShowAlert(false);
    //   }
    // }, [error]);
  
    const handleInputChange = (event) => {
  
      const { name, value } = event.target;
      console.log(name, " is being changed to: ", value);
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      const form = event.currentTarget;
      console.log("the form is: ", form);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      try {
        console.log("our user data is: ", userFormData);
        const { data } = await getSavedJobIds({
          variables: { ...userFormData },
        });
  
        console.log("our data result is: ", data);
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setUserFormData({
        email: '',
        password: '',
      });
    };
>>>>>>> 36ea3a1954681cd47ffb96dd95137029bc3a52f5

    return (
    <div>
        <Container />
            <div className="jobSearchBar">
            </div>

//             <section className="appliedjobs container col-md-8">
//             <div className="row">


<<<<<<< HEAD
//                 <div className="col-md-3">
//                     <span className="bluetext"> {this.state.appliedJobs}</span>
//                     <span className ="lightgreytext"> Applied Jobs </span>
//                 </div>

//                 <div className="col-md-3">
//                     <span className="bluetext"> {this.state.savedJobs}</span>
//                     <span className ="lightgreytext"> <Link to="/jobshome/savedjobs" className ="lightgreytext"> Saved Jobs </Link></span>               
//                 </div> 
//         </div>
//         </section>
=======
                <div className="col-md-3">
                    <span className="bluetext"> Job home</span>
                    <span className ="lightgreytext"> Applied Jobs </span>
                </div>

                <div className="col-md-3">
                    <span className="bluetext"> home </span>
                    <span className ="lightgreytext"> <Link to="/jobshome" className ="lightgreytext"> Saved Jobs </Link></span>               
                </div> 
        </div>
        </section>
>>>>>>> 36ea3a1954681cd47ffb96dd95137029bc3a52f5

//         <section className="companies-info companies-info-background col-md-8" >
        
//         <div className="smallheading">
// 					<h3>Jobs you may be interested in</h3>
// 		</div>
//         </section>
        
        


    </div>
    )
  }

  
export default JobsHome;
  


