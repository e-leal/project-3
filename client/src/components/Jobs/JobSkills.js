import React, { Component } from 'react'
import "./jobs.css";

class JobSkills extends Component {
constructor(props){
    super(props)

    this.state={
        skills:['Pegasystems PRPC','Pega PRPC','XML','Management Consulting','Solution Architecture']
    }

}
  render() {
      let skills=null;
      skills =this.props.skills.map(skill => {
        return(
            <div className="row">
            <div className="col-md-1 image-tick">
            <img src={Tick} style={{width:"16px"}} alt=""></img>
            </div>
            <div className="col-md-9">
            <label className="skill-name">{skill}</label>
            </div>
            
            </div>
        )
    }) 
    return (
      <div>

      <label className="heading-location">
      Required Skills
      </label>
      <div>
      {skills}
      </div>
      </div>
      
    )
  }
}
export default JobSkills;