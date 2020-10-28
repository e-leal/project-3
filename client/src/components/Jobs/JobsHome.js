<<<<<<< HEAD
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { searchCareerJobs } from '../utils/API';
// import "./jobs.css";
// import { Container } from 'react-bootstrap';


// //import Navabar

// class JobsHome extends Component {

//     // Bringing the jobs according to the skill set of the user
//     // async componentDidMount(){
//     //     var headers = new Headers();
//     //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmVlN2VkMmM0YmYxNzRkMWNkYTc4NzkiLCJyb2xlIjoiYXBwbGljYW50IiwiaWF0IjoxNTQyNTc2Mzc4fQ.BHLiKXbJJ5KxwxwhvFty5e0VFHhdZ_QPZcjKwE_Xjjg"
// 	// 	const config = {
// 	// 		headers: 
// 	// 		{ 
// 	// 			'Authorization': 'Bearer ' + token
// 	// 		}
// 	// 	};
// 	// 	axios.defaults.withCredentials = true;
//     //     let ret = await api('GET','/users/5bee7ed2c4bf174d1cda7879',config);
//     //     var skills_set = ret.data.payLoad.user.skills;
//     //     let ret = await api('GET','search/jobs',config);
=======
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./jobs.css";
import { Container } from 'react-bootstrap';


//import Navabar

const JobsHome = () => {

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
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95
        

//     //     // console.log("data1",temp.data.payLoad);

//     // }

<<<<<<< HEAD

//     render() {

//     return (
//     <div>
//         <Container />
//             <div className="jobSearchBar">
//             </div>
=======
    return (
    <div>
        <Container />
            <div className="jobSearchBar">
            </div>
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95

//             <section className="appliedjobs container col-md-8">
//             <div className="row">


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

//         <section className="companies-info companies-info-background col-md-8" >
        
//         <div className="smallheading">
// 					<h3>Jobs you may be interested in</h3>
// 		</div>
//         </section>
        
        


<<<<<<< HEAD
//     </div>
//     )
//   }
// }


// function mapStateToProps(state) {
//     console.log("in map state details view",state);
//   //  return { property_detail: state.fetch_details_view.property_detail,
//   //  };
//   }
  
//   const mapDispachToProps = dispatch => {
//     return {
//      //   fetch_detailsview: (id) => dispatch(fetch_detailsview(id)),
     

//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     mapDispachToProps
//   )(JobsHome);
=======
    </div>
    )
  }

  
export default JobsHome;
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95
  


