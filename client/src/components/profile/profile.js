import React, { useState, useEffect } from 'react'
import profileplaceholder from "../Files/Images/profile-placeholder.png";
import { Container } from 'react-bootstrap';
import "./profile.css";
import { Link } from "react-router-dom";
import { GET_ME } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import Jobcon from '../Jobs/Jobcon';
import ApplicationCard from '../ApplicationCard';
import JobCard from '../Jobs/JobCard';


const Profile = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '', name: '', number: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const {loading, data} = useQuery(GET_ME);
    const userData = data?.me || {};
    console.log("our current user's data is: ", userData);
    
    if(loading){
        return <h2>LOADING...</h2>;
    }
if(!userData.employer){
    return (
        <div className="emp-profile">
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src= { profileplaceholder } alt=""/>
                        <div className="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    {userData.username}
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <p className="proile-rating">RANKINGS : <span>10/10</span></p>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Profile</a><br/>
                        <a href="">Bootsnipp Profile</a><br/>
                        <a href="">Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.number}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Salary</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>89,000/yr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Your Bio</label><br/>
                                    <p>Your detail description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>  
        <Jobcon>
          <section>
              <div className="smallheading">
                <h3 className="card-title">Applications you have created</h3>
              </div>
          </section>
          <div>
            {loading ? <div>Loading...</div> : <ApplicationCard applications={userData.createdApplications} /> } 
          </div>
        </Jobcon>    
    </div>
    );
 }
 else {
    return (
        <div className="emp-profile">
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">
                        <img src= { profileplaceholder } alt=""/>
                        <div className="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h5>
                                    {userData.username}
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <p className="proile-rating">RANKINGS : <span>10/10</span></p>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Profile</a><br/>
                        <a href="">Bootsnipp Profile</a><br/>
                        <a href="">Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.number}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Salary</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>89,000/yr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Your Bio</label><br/>
                                    <p>Your detail description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>  
        <Jobcon>
          <section>
              <div className="smallheading">
                <h3 className="card-title">Jobs you have created</h3>
              </div>
          </section>
          <div>
            {loading ? <div>Loading...</div> : <JobCard jobs={userData.createdJobs} /> } 
          </div>
        </Jobcon>    
    </div>
    );
 }
}

export default Profile;