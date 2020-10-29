import React, { Component } from 'react'
import "./jobs.css";
import { Link } from 'react-router-dom';

class JobRecruiter extends Component {

  render() {
    
    return (
      <div>
<hr/>
      <label className="heading-location">
      Contact the Job Poster
      </label>
      <div>
      <div className="row">
            <div className="col-md-5 image-tick">
            <img id="target2" src={""} className="avatar img-circle img-thumbnail" alt="" />

            </div>
            <div className="col-md-6">
            <div>
            <label className="recuiter-name">{this.state.fname} &nbsp; {this.state.lname}</label><br/>
            </div>
            <br/>
            <div>
            <label style={{fontSize:"10px"}}>{this.state.company}</label>
            </div>
            </div>
            
            </div>
            <Link to="/profile"><label style={{fontSize:"14px"}}>Recruiter Profile</label></Link>
            <hr/>
            
      </div>
      </div>
      
    )
  }
}
export default JobRecruiter;