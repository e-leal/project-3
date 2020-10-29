import React, { Component } from 'react'
import {set_active_id} from "../../actions/jobCardActiveId";
import "./jobs.css";

class JobCard extends Component {

  render() {
    return (
      <div className="row left-job-detail" onClick={this.state}>
           
              <div className="col-md-2 left-job-detail-image">
              </div>
              <div className="col-md-10 left-job-detail-desc">
              <div className="heading-company3">
               {/* {this.state.title} */}
              </div>
              <div className="heading-company4">
              {/* {this.state.company} */}
              </div>
              <div className="heading-location3">
              {/* <img src={""}></img>&nbsp; {this.state.address.city} {this.state.address.zipcode},{this.state.address.country} */}
              </div>
              <div>
              <label style={{color:"green",fontSize:"12px"}}>New &#9670;</label>&nbsp;<label style={{fontSize:"12px"}}>Posted {this.state.time_diff}  ago</label>
               </div>
              <div className="heading-company4">
              {/* {this.state.description} */}
              </div>
              </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("in map Jobs Search",state);
 return { jobs: state.searched_jobs.jobs,
};
}

const mapDispachToProps = dispatch => {
  return {
     set_active_id: (id) => dispatch(set_active_id(id)),
   

  };
};

export default JobCard;