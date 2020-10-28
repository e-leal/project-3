import React, { Component } from "react";
import "./PostJob.css";
import PostJobHeader from "./PostJobHeader";
import jobsfooter from "../Files/Images/jobsfooter.png";

//import Navbar

class PostJob extends Component {

  render() {
    return (
      <div className="div">
        <PostJobHeader />

        <div className="container-fluid containerstyle">
          <div style={{clear : "both", paddingTop: "72px"}}>
            <p className="lead jobtext"  style={{marginLeft: "24%"}}>
              Reach quality candidates.
            </p>
          </div>

          <form className="jobform">
            <div className="form-group filter-message-box">
                <i className="fa fa-building"> </i>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Company"
                onChange={this.onChange}
                name="company"
              />
            </div>
            <div className="form-group filter-message-box">
            <i className="fa fa-suitcase"> </i>
              <input
                type="text"
                className="form-control"
                id="jobtitle"
                placeholder="Job title"
                onChange={this.onChange}
                name="jobtitle"
              />
            </div>

            <div className="form-group filter-message-box">
            <i className="fa fa-map-marker"> </i>
              {/* <input
                type="text"
                className="form-control"
                id="jobaddress"
                placeholder="Job Address or City"
                name="jobaddress"
                onChange={this.onChange}
              /> */}
            </div>
            <button
              type="button"
              class="btn btn-lg submitbutton wow-page__submit-button"
              onClick={this.handleJobPost}
            >
              Start job post
            </button>
          </form>
        </div>

        <div>
          <img src={jobsfooter} class="footercrop" style={{marginTop : "10px"}} alt="no pic" />{" "}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Inside map state to props ", state);
}

const mapDispachToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(PostJob);
