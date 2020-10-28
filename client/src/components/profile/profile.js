// import React, { Component } from "react";
// import profileplaceholder from "../Files/Images/profile-placeholder.png";
// import "./profile.css";
// import { Link } from "react-router-dom";

// const profile = () => {

    
<<<<<<< HEAD
//     return (
//         <div className="container">
//           <div className="row block-row">
//             <div className="wrapper col-lg-9">
//               <main>
//                 <div className="main-section">
//                   <div>
//                     <div className="main-section-data">
//                       <div className="row ">
//                         <div className="col-lg-12 no-padding">
//                           <div className="main-left-sidebar">
//                             <div className="user_profile custom-wrapper">
//                               <section className="cover-sec">
//                               </section>
//                               <div className="user-pro-img">
//                                 <img
//                                   src={this.state.userimage}
//                                   alt="Profilepic"
//                                   className="user-image profile-user-image"
//                                 />
//                               </div>
//                               {/* <!--user-pro-img end--> */}
//                               <div className="user_pro_status">
//                                 <h3 className="profile-user-name">
//                                   {this.state.firstname} {this.state.lastname}
//                                 </h3>
//                                 <h5 className="profile-user-subname">
//                                   {this.state.headline}
//                                 </h5>
//                                 <p className="location-text">
//                                   {this.state.city}
//                                 </p>

//                                 <div className="dropdown">
//                                   <button
//                                     id="profile-section"
//                                     type="button"
//                                     className="btn btn-secondary dropdown-toggle"
//                                     data-toggle="dropdown"
//                                     aria-haspopup="true"
//                                     aria-expanded="false"
//                                   >
//                                     Add Profile Section
//                                   </button>
//                                   <div
//                                     className="dropdown-menu exts"
//                                     aria-labelledby="profile-section"
//                                   >
//                                     <button
//                                       className="dropdown-item"
//                                       data-toggle="modal"
//                                       data-target="#expModal"
//                                     >
//                                       Work Experience
//                                     </button>
//                                     <button
//                                       className="dropdown-item"
//                                       data-toggle="modal"
//                                       data-target="#educationModal"
//                                     >
//                                       Add Education
//                                     </button>
//                                     <button
//                                       className="dropdown-item"
//                                       data-toggle="modal"
//                                       data-target="#skillsModal"
//                                     >
//                                       Skills
//                                     </button>
//                                     <button
//                                       className="dropdown-item"
//                                       data-toggle="modal"
//                                       data-target="#personalModal"
//                                     >
//                                       Personal Details
//                                     </button>
//                                     <button
//                                       className="dropdown-item"
//                                       type="button"
//                                       onClick={() =>
//                                         this.changeDocument("RESUME")
//                                       }
//                                     >
//                                       {" "}
//                                       Add Resume
//                                     </button>
//                                   </div>
//                                 </div>

//                                 <hr />

//                                 <div className="user-description">
//                                   {this.state.summary}
//                                 </div>
//                                 {this.state.resume && (
//                                   <div
//                                     className="user-resume"
//                                     onClick={this.viewPDF}
//                                   >
//                                     <i class="fa fa-file-pdf resume-icon" />{" "}
//                                     View Resume
//                                   </div>
//                                 )}
//                               </div>
//                             </div>

//                             <div className=" custom-wrapper suggestions full-width">
//                               <div className="sd-title">
//                                 <h5 className="profile-user-heading">
//                                   Experience
//                                   {/*  <i className="fa fa-pen custom-edit-buttons" aria-hidden="true"></i>*/}
//                                   <i
//                                     className="fa fa-plus custom-edit-buttons"
//                                     aria-hidden="true"
//                                     onClick={() => this.openModal("EXPERIENCE")}
//                                   />
//                                 </h5>
//                                 <i className="la la-ellipsis-v" />
//                               </div>
//                               <div className="suggestions-list">
//                                 {this.state.experience.map((a, ind1) => {
//                                   return (
//                                     <div className="">
//                                       <div className="suggestion-usd detail-boxes ">
//                                         <span class="fa fa-briefcase left-icons" />
//                                         <div className="sgt-text">
//                                           <h4>
//                                             <div className="exp-title">
//                                               {a.title}
//                                             </div>
//                                             <div className="exp-company">
//                                               {a.company}
//                                             </div>

//                                             <div className="exp-dates">
//                                               {moment(
//                                                 a["date"]["startdate"]
//                                               ).format("MMM YYYY") +
//                                                 "-" +
//                                                 moment(
//                                                   a["date"]["enddate"]
//                                                 ).format("MMM YYYY")}{" "}
//                                               &#x25CB;{" "}
//                                               {this.getDiffBetweenDates(
//                                                 a["date"]["startdate"],
//                                                 a["date"]["enddate"]
//                                               )}
//                                             </div>
//                                             <div className="exp-location">
//                                               {a.location}
//                                             </div>
//                                             <div className="exp-desc">
//                                               {a.description}
//                                             </div>
//                                             <i
//                                               className="fa fa-pen custom-edit-buttons"
//                                               aria-hidden="true"
//                                               onClick={() =>
//                                                 this.detailModal(
//                                                   ind1,
//                                                   a._id,
//                                                   "EXPERIENCE"
//                                                 )
//                                               }
//                                             />
//                                           </h4>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             </div>

//                             <div className=" custom-wrapper suggestions full-width">
//                               <div className="sd-title">
//                                 <h5 className="profile-user-heading">
//                                   Education
//                                   {/*  <i className="fa fa-pen custom-edit-buttons" aria-hidden="true"></i>*/}
//                                   <i
//                                     className="fa fa-plus custom-edit-buttons"
//                                     aria-hidden="true"
//                                     onClick={() => this.openModal("EDUCATION")}
//                                   />
//                                 </h5>
//                                 <i className="la la-ellipsis-v" />
//                               </div>
//                               <div className="suggestions-list">
//                                 {this.state.education.map((a, ind1) => {
//                                   return (
//                                     <div className="">
//                                       <div className="suggestion-usd detail-boxes ">
//                                         <span class="fa fa-certificate left-icons" />
//                                         <div className="sgt-text">
//                                           <h4>
//                                             <div className="exp-title">
//                                               {a.school}
//                                             </div>
//                                             <div className="exp-company">
//                                               {a.degree} {a.field}
//                                             </div>

//                                             <div className="exp-dates">
//                                               {moment(
//                                                 a["date"]["startdate"]
//                                               ).format("MMM YYYY") +
//                                                 "-" +
//                                                 moment(
//                                                   a["date"]["enddate"]
//                                                 ).format("MMM YYYY")}{" "}
//                                               &#x25CB;{" "}
//                                               {this.getDiffBetweenDates(
//                                                 a["date"]["startdate"],
//                                                 a["date"]["enddate"]
//                                               )}
//                                             </div>

//                                             <div className="exp-desc">
//                                               {a.description}
//                                             </div>
//                                             <i
//                                               className="fa fa-pen custom-edit-buttons"
//                                               aria-hidden="true"
//                                               onClick={() =>
//                                                 this.detailModal(
//                                                   ind1,
//                                                   a._id,
//                                                   "EDUCATION"
//                                                 )
//                                               }
//                                             />
//                                           </h4>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             </div>

//                             <div className=" custom-wrapper suggestions full-width">
//                               <div className="sd-title">
//                                 <h5 className="profile-user-heading">
//                                   Skills
//                                   {/*  <i className="fa fa-pen custom-edit-buttons" aria-hidden="true"></i>*/}
//                                   <i
//                                     className="fa fa-plus custom-edit-buttons"
//                                     aria-hidden="true"
//                                     onClick={() => this.openModal("SKILLS")}
//                                   />
//                                   <i
//                                     className="fa fa-pen custom-edit-buttons onlyskillsbt"
//                                     aria-hidden="true"
//                                     onClick={() =>
//                                       this.detailModal("", "", "SKILLS")
//                                     }
//                                   />
//                                 </h5>
//                                 <i className="la la-ellipsis-v" />
//                               </div>
//                               <div className="suggestions-list">
//                                 {this.state.skills.map((a, ind1) => {
//                                   return (
//                                     <div className="suggestion-usd detail-boxes skill-sug col-lg-6">
//                                       <div className="sgt-text">
//                                         <h4>{a}</h4>
//                                       </div>
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             </div>

//                             <div className=" custom-wrapper suggestions full-width">
//                               <div className="sd-title">
//                                 <h5 className="profile-user-heading">
//                                   Personal Info
//                                   {/*  <i className="fa fa-pen custom-edit-buttons" aria-hidden="true"></i>*/}
//                                   <i
//                                     className="fa fa-pen custom-edit-buttons"
//                                     aria-hidden="true"
//                                     onClick={() => this.openModal("PERSONAL")}
//                                   />
//                                 </h5>
//                                 <i className="la la-ellipsis-v" />
//                               </div>
//                               <div className="suggestions-list">
//                                 <div className="suggestion-usd detail-boxes ">
//                                   <span class="fa fa-user-circle left-icons" />
//                                   <div className="sgt-text">
//                                     <div className="exp-company">
//                                       {this.state.firstname}{" "}
//                                       {this.state.lastname}
//                                     </div>
//                                     <div className="exp-company">
//                                       {this.state.address.street} <br />
//                                       {this.state.city}
//                                       <br />
//                                       {this.state.country}
//                                       <br />
//                                       {this.state.zipcode}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <!-- main-section-data end--> */}
//                   </div>
//                 </div>
//               </main>

//               <div className="overview-box" id="create-portfolio">
//                 <div className="overview-edit">
//                   <h3>Create Portfolio</h3>
//                   <form>
//                     <input
//                       type="text"
//                       name="pf-name"
//                       placeholder="Portfolio Name"
//                     />
//                     <div className="file-submit">
//                       <input type="file" name="file" />
//                     </div>
//                     <div className="pf-img">
//                       <img src="http://via.placeholder.com/60x60" alt="" />
//                     </div>
//                     <input
//                       type="text"
//                       name="website-url"
//                       placeholder="htp://www.example.com"
//                     />
//                     <button type="submit" className="save">
//                       Save
//                     </button>
//                     <button type="submit" className="cancel">
//                       Cancel
//                     </button>
//                   </form>
//                   <a href="javascript:void(0)" title="" className="close-box">
//                     <i className="la la-close" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-3 right-sidebar" style={{ height: "auto" }}>
//               <div>
//                 <a
//                   href={`/public-profile/${this.state.publicid}`}
//                   className="view-public save-button"
//                 >
//                   View Public Page
//                 </a>
//               </div>
              
//               <div><p style={{fontSize: "20px", color: "black",textAlign: "center"}}>
//                             Jobs you may like
//                         </p>
//                         <hr />
//                         <div
//                             style={{
//                             height: "auto",
//                             backgroundColor: "#FFF",
//                             marginTop: "-5px",
//                             paddingTop: "10px"
//                             }}
//                         >
//                         </div>
//             </div>
//             {/* <!--right-sidebar end--> */}
//           </div>
//           {/* <!--theme-layout end--> */}
//           <footer>
//             <div className="footy-sec mn no-margin">
//               <div className="container">
//                 <ul>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Help Center
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Community Guidelines
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Cookies Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Career
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Forum
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Language
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:void(0)" title="">
//                       Copyright Policy
//                     </a>
//                   </li>
//                 </ul>
//                 <p>
//                   <img src="images/copy-icon2.png" alt="" />
//                   Copyright 2018
//                 </p>
//                 <img className="fl-rgt" src="images/logo2.png" alt="" />
//               </div>
//             </div>
//           </footer>
//         </div>

//         {/*******ALL MODALS INSERTED HERE FOR THE EDIT OPTIONS ***********/}
//         <div
//           className="modal fade"
//           id="expModal"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="expModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="expModalLabel">
//                   Work Experience
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <label id="work-exp-form"> Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Ex.Manager"
//                   />
//                   <br />
//                   <label id="work-exp-form"> Company</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Ex.Microsoft"
//                   />
//                   <br />
//                   <table cellSpacing="10%">
//                     <tr>
//                       <td>
//                         <label id="work-exp-form"> From *</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           placeholder="From"
//                         />
//                       </td>
//                       <td>
//                         <label id="work-exp-form"> To *</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           placeholder="To"
//                         />
//                       </td>
//                     </tr>
//                   </table>
//                   <br />

//                   <label id="work-exp-form"> HeadLine</label>
//                   <input type="text" className="form-control" />
//                   <br />
//                   <label id="work-exp-form"> Location </label>
//                   <br />
//                   <label id="work-exp-form"> Description </label>
//                   <input type="textarea" className="form-control" />
//                   <br />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn  delete-button  mr-auto"
//                   onClick={this.deleteExp}
//                 >
//                   Delete Experience
//                 </button>
//                 <button
//                   type="button"
//                   onClick={this.addExperience}
//                   className="btn save-button"
//                 >
//                   Add Experience
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*  Education Modal Dialog*/}
//         <div
//           className="modal fade"
//           id="educationModal"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="educationModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="educationModalLabel">
//                   Education
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <label id="work-exp-form"> School</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Ex.Boston"
//                   />
//                   <br />
//                   <label id="work-exp-form"> Degree</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Ex.Bachelor's"
//                   />
//                   <br />
//                   <label id="work-exp-form"> Field of Study</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Ex.Business"
//                   />
//                   <br />
//                   <label id="work-exp-form"> Grade</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Grade"
//                   />
//                   <br />

//                   <table cellSpacing="10%">
//                     <tr>
//                       <td>
//                         <label id="work-exp-form"> From year</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           placeholder="From"
//                         />
//                       </td>
//                       <td>
//                         <label id="work-exp-form"> To year </label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           placeholder="To"
//                         />
//                       </td>
//                     </tr>
//                   </table>
//                   <br />

//                   <label id="work-exp-form"> Description </label>
//                   <input type="textarea" className="form-control" />
//                   <br />
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn  delete-button  mr-auto"
//                   onClick={this.deleteEducation}
//                 >
//                   Delete Education
//                 </button>
//                 <button
//                   type="button"
//                   onClick={this.addEducation}
//                   className="btn save-button"
//                 >
//                   Add Education
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*  Skills Modal Dialog*/}
//         <div
//           className="modal fade"
//           id="skillsModal"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="skillsModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="skillsModalLabel">
//                   Skills
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <div class="input-group">
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Ex. Java"
//                     id="addSkill"
//                   />
//                   <span class="input-group-btn">
//                     <button
//                       className="btn btn-default save-btn-small"
//                       type="button"
//                       onClick={this.addSkill}
//                     >
//                       <i class="fa fa-search" />
//                     </button>
//                   </span>
//                 </div>

//                 <div>
//                   <div className="table table-responsive">
//                     <table className="table skilltable table-striped">
//                       <thead>
//                         <tr>
//                           <td>Skill</td>
//                           <th />
//                         </tr>
//                       </thead>
//                       <tbody id="skillstable" />
//                     </table>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn  delete-button  mr-auto"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn save-button"
//                   onClick={this.saveSkills}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*  Personal Modal Dialog*/}
//         <div
//           className="modal fade"
//           id="personalModal"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="skillsModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="personalModalLabel">
//                   Personal Details
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div class="form-row">
//                     <div class="form-group col-md-6">
//                       <label for="inputEmail4">First Name</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="firstname"
//                         name="firstname"
//                         onChange={this.handleText}
//                         value={this.state.firstname}
//                         placeholder="Email"
//                       />
//                     </div>
//                     <div class="form-group col-md-6">
//                       <label for="inputPassword4">Last Name</label>
//                       <input
//                         class="form-control"
//                         id="lastname"
//                         name="lastname"
//                         onChange={this.handleText}
//                         value={this.state.lastname}
//                       />
//                     </div>
//                   </div>
//                   <div class="form-group pos-rel">
//                     <label for="inputAddress">Address</label>
//                   </div>
//                   <div class="form-row">
//                     <div class="form-group col-md-4">
//                       <label for="inputEmail4">City</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="city"
//                         placeholder=""
//                         value={this.state.city}
//                         onChange={this.handleText}
//                       />
//                     </div>
//                     <div class="form-group col-md-4">
//                       <label for="inputPassword4">State</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="state"
//                         placeholder=""
//                         value={this.state.state}
//                         onChange={this.handleText}
//                       />
//                     </div>
//                     <div class="form-group col-md-4">
//                       <label for="inputPassword4">Zip Code</label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="zipcode"
//                         placeholder=""
//                         value={this.state.zipcode}
//                         onChange={this.handleText}
//                       />
//                     </div>
//                   </div>
//                   <div class="form-group">
//                     <label>Headline</label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="headline"
//                       placeholder=""
//                       value={this.state.headline}
//                       onChange={this.handleText}
//                     />
//                   </div>
//                   <div class="form-group">
//                     <label for="inputAddress">Summary</label>
//                     <textarea
//                       class="form-control"
//                       name="summary"
//                       id="summary"
//                       onChange={this.handleText}
//                       value={this.state.summary}
//                     />
//                   </div>
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn  delete-button  mr-auto"
//                   onClick={this.delPersonal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   onClick={this.addPersonal}
//                   className="btn save-button"
//                 >
//                   Save Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="hiddenbox">
//           <input
//             type="file"
//             name="profilebox"
//             id="profilebox"
//             onChange={() => this.docChange("PROFILE")}
//           />
//         </div>
//         <div className="hiddenbox">
//           <input
//             type="file"
//             name="bannerbox"
//             id="bannerbox"
//             onChange={() => this.docChange("BANNER")}
//           />
//         </div>
//         <div className="hiddenbox">
//           <input
//             type="file"
//             name="resumebox"
//             id="resumebox"
//             onChange={() => this.docChange("RESUME")}
//           />
//         </div>
//     );
//   }
=======
 return (
      <div class="container emp-profile">
      <form method="post">
          <div class="row">
              <div class="col-md-4">
                  <div class="profile-img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                      <div class="file btn btn-lg btn-primary">
                          Change Photo
                          <input type="file" name="file"/>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="profile-head">
                              <h5>
                                  Kshiti Ghelani
                              </h5>
                              <h6>
                                  Web Developer and Designer
                              </h6>
                              <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item">
                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="col-md-2">
                  <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4">
                  <div class="profile-work">
                      <p>WORK LINK</p>
                      <a href="">Website Link</a><br/>
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
              <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>User Id</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>Kshiti123</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Name</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>Kshiti Ghelani</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Email</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>kshitighelani@gmail.com</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Phone</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>123 456 7890</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Profession</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>Web Developer and Designer</p>
                                      </div>
                                  </div>
                      </div>
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Experience</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>Expert</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Hourly Rate</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>10$/hr</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Total Projects</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>230</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>English Level</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>Expert</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6">
                                          <label>Availability</label>
                                      </div>
                                      <div class="col-md-6">
                                          <p>6 months</p>
                                      </div>
                                  </div>
                          <div class="row">
                              <div class="col-md-12">
                                  <label>Your Bio</label><br/>
                                  <p>Your detail description</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>           
  </div>
    );
  }
>>>>>>> a457a256d705cdf9904f1168f07858fe35055f95


// export default profile;