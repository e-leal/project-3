import React, { Component } from 'react'
import "./jobs.css";
import { Link } from 'react-router-dom';

class JobRecruiter extends Component {
constructor(props){
    super(props)

    this.state={
        fname:"Tester",
        lname:"testing",
        company:"Sr Recruiter",
        id:"",
        rec_id:this.props.data
    }
    this.getRecruiter=this.getRecruiter.bind(this);

}

async getRecruiter(id){
if(id){

  try {
    let ret = await api('GET','/users/'+id);
    
    this.setState({
      fname:ret.data.payLoad.user.name.first,
      lname:ret.data.payLoad.user.name.last,
      company:ret.data.payLoad.user.company
    })
  } catch (error) {
    console.log("error",Object.keys(error), error.response);
    if(error.response){
    printError(error);
    }
  }

}else{
  return;
}
}

componentWillReceiveProps(nextProps){
  
  
    this.getRecruiter(nextProps.data);
 
  
}

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