(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[0],{119:function(e,a,t){e.exports=t.p+"static/media/profile-placeholder.63b39416.png"},124:function(e,a,t){e.exports=t(143)},129:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(48),c=t.n(l),o=(t(90),t(129),t(33)),i=t(16),s=t(18),m=t(122),u=t(10),d=t(153),p=t(148),b=t(152),E=t(150),v=t(154),g=t(20),f=t.n(g),h=t(37),y=t(39),j=t(22),w=t(151),N=t(146),O=t(147),k=t(27),S=t(15),x=t.n(S);function C(){var e=Object(k.a)(["\nmutation removeJob($jobId: ID){\n    removeJob(jobId: $jobId){\n        _id\n        username\n        email\n        employer\n        createdJobs{\n            company\n            title\n            createdAt\n            contact\n            description\n            requirements\n        }\n    }\n}\n"]);return C=function(){return e},e}function A(){var e=Object(k.a)(["\nmutation removeApplication($appplicationId: ID){\n    removeApplication(applicationId: $applicationId){\n        _id\n        username\n        email\n        employer\n        createdApplications{\n            resume\n            email\n            createdAt\n            status\n            appliedJob{\n                _id\n                company\n                createdAt\n                contact\n                description\n                requirements\n            }\n            comments {\n                username\n                createdAt\n                body\n            }\n        }\n    }\n}\n"]);return A=function(){return e},e}function I(){var e=Object(k.a)(["\nmutation createApplication($resume: String!, $jobId: ID){\n    createApplication(resume: $resume, jobId: $jobId ){\n        _id\n        resume\n        email\n        createdAt\n        status\n        appliedJob{\n            _id\n            company\n            createdAt\n            contact\n            description\n            requirements\n        }\n        comments {\n            username\n            createdAt\n            body\n        }\n    }\n}\n"]);return I=function(){return e},e}function q(){var e=Object(k.a)(["\nmutation createJob($company: String!, $title: String!, $contact: String!, $description: String!, $requirements: String!){\n    createJob(company: $company, title: $title, contact: $contact, description: $description, requirements: $requirements){\n        _id\n        company\n        title\n        createdAt\n        contact\n        description\n        requirements\n    }\n}\n"]);return q=function(){return e},e}function $(){var e=Object(k.a)(["\n    mutation saveApplication($applicationId: ID!){\n        saveApplication(applicationId: $applicationId){\n            _id\n            username\n            email\n            employer\n        }\n    }\n"]);return $=function(){return e},e}function _(){var e=Object(k.a)(["\n    mutation saveJob($jobId: ID!){\n        saveJob(jobId: $jobId){\n            _id\n            username\n            email\n            employer\n        }\n    }\n"]);return _=function(){return e},e}function P(){var e=Object(k.a)(["\nmutation addUser($username: String!, $email: String!, $password: String!, $employer: String){\n       addUser(username: $username, email: $email, password:$password, employer: $employer){\n     \ttoken\n       user {\n       \t_id\n       \tusername\n     \t}\n     }\n }\n"]);return P=function(){return e},e}function L(){var e=Object(k.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]);return L=function(){return e},e}var J=x()(L()),D=x()(P()),F=x()(_()),T=(x()($()),x()(q())),W=x()(I()),R=(x()(A()),x()(C()),t(107)),B=t(108),G=t(85),M=new(function(){function e(){Object(R.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return Object(G.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(G.a)(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){console.log("here is our token: ",e),localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),U=function(){var e=Object(n.useState)({username:"",email:"",password:"",name:"",number:"",employer:!1}),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,1)[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1],b=Object(s.useMutation)(D),E=Object(u.a)(b,2),v=E[0],g=E[1].error;Object(n.useEffect)((function(){p(!!g)}),[g]);var k=function(e){var a=e.target,n=a.name,r=a.value;console.log(n," is being changed to: ",r),l(Object(j.a)(Object(j.a)({},t),{},Object(y.a)({},n,r)))},S=function(){var e=Object(h.a)(f.a.mark((function e(a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,console.log("our user form data is: ",t),e.next=7,v({variables:{email:t.email,name:t.name,number:t.number,username:t.username,employer:t.employer,password:t.password}});case 7:n=e.sent,r=n.data,console.log("our data is: ",r),M.login(r.addUser.token),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0),p(!0);case 17:l({username:"",email:"",password:"",number:"",name:"",employer:!1});case 18:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:S},r.a.createElement(N.a,{dismissible:!0,onClose:function(){return p(!1)},show:d,variant:"danger"},"Something went wrong with your signup!"),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"name"},"First & Last Name"),r.a.createElement(w.a.Control,{type:"name",placeholder:"Jon Smith",name:"name",onChange:k,value:t.name,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Phone Number is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"username"},"Username"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:k,value:t.username,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Username is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(w.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:k,value:t.email,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"number"},"Phone Number"),r.a.createElement(w.a.Control,{type:"number",placeholder:"xxx-xxx-xxxx",name:"number",onChange:k,value:t.number,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Phone Number is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:k,value:t.password,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"employer"},"Are you an employer?"),r.a.createElement(w.a.Control,{as:"select",name:"employer",onChange:k,value:t.employer,required:!0,defaultValue:!1},r.a.createElement("option",{value:!1},"No"),r.a.createElement("option",{value:!0},"Yes"))),r.a.createElement(O.a,{disabled:!(t.username&&t.email&&t.password),type:"primary",variant:"success"},"Submit")))},V=(t(138),function(){var e=Object(n.useState)({email:"",password:""}),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,1)[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1],b=Object(s.useMutation)(J),E=Object(u.a)(b,2),v=E[0],g=E[1].error;Object(n.useEffect)((function(){p(!!g)}),[g]);var k=function(e){var a=e.target,n=a.name,r=a.value;console.log(n," is being changed to: ",r),l(Object(j.a)(Object(j.a)({},t),{},Object(y.a)({},n,r)))},S=function(){var e=Object(h.a)(f.a.mark((function e(a){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.currentTarget,console.log("the form is: ",n),!1===n.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=4,console.log("our user data is: ",t),e.next=8,v({variables:Object(j.a)({},t)});case 8:r=e.sent,c=r.data,console.log("our data result is: ",c),M.login(c.login.token),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:l({email:"",password:""});case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:S},r.a.createElement(N.a,{dismissible:!0,onClose:function(){return p(!1)},show:d,variant:"danger"},"Something went wrong with your login credentials!"),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),r.a.createElement(w.a.Control,{type:"text",placeholder:"Email",name:"email",onChange:k,value:t.email,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),r.a.createElement(w.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:k,value:t.password,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),r.a.createElement(O.a,{disabled:!(t.email&&t.password),type:"primary",variant:"success",className:"signup-login-button"},"Submit")))}),K=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"dark",expand:"lg",id:"dark-purple"},r.a.createElement(p.a,{fluid:!0},r.a.createElement(d.a.Brand,{as:o.b,to:"/"},r.a.createElement("h1",null,"Certainly")),r.a.createElement(d.a.Toggle,{"aria-controls":"navbar"}),r.a.createElement(d.a.Collapse,{id:"navbar"},r.a.createElement(b.a,{className:"ml-auto",size:"sm"},r.a.createElement(b.a.Link,{as:o.b,to:"profile"},r.a.createElement("h4",{className:"navbar-text"},"Profile")),M.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"ml-auto",size:"sm"}),r.a.createElement(b.a.Link,{as:o.b,to:"PostJob"},r.a.createElement("h4",{className:"navbar-text"},"Post a Job")),r.a.createElement(b.a.Link,{onClick:M.logout},r.a.createElement("h4",{className:"navbar-text"},"Logout"))):r.a.createElement(b.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("h4",null,"Login")))))),r.a.createElement(E.a,{size:"lg",show:t,onHide:function(){return l(!1)},"aria-labelledby":"signup-modal"},r.a.createElement(v.a.Container,{defaultActiveKey:"login"},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,{id:"signup-modal"},r.a.createElement(b.a,{variant:"pills"},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{eventKey:"login"},"Login")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{eventKey:"signup"},"Sign Up"))))),r.a.createElement(E.a.Body,null,r.a.createElement(v.a.Content,null,r.a.createElement(v.a.Pane,{eventKey:"login"},r.a.createElement(V,{handleModalClose:function(){return l(!1)}})),r.a.createElement(v.a.Pane,{eventKey:"signup"},r.a.createElement(U,{handleModalClose:function(){return l(!1)}})))))))},z=(t(123),t(149)),H=t(111);function Q(){var e=Object(k.a)(["\nquery receivedApps($id: ID){\n    receivedApps(id: $id){\n        _id\n        email\n        resume\n        status\n        createdAt\n    }\n}\n"]);return Q=function(){return e},e}function Y(){var e=Object(k.a)(["\n  query job($id: ID!) {\n    job(_id: $id) {\n      _id\n      company\n      title\n      createdAt\n      contact\n      description\n      requirements\n      jobApplications {\n        _id\n        createdAt\n        email\n        resume\n        status\n        comments {\n            _id\n            body\n            createdAt\n        }\n      }\n    }\n  }\n"]);return Y=function(){return e},e}function X(){var e=Object(k.a)(["\nquery jobs{\n    jobs{\n            _id\n            company\n            createdAt\n            title\n            contact\n            description\n            requirements\n        }\n    }\n  "]);return X=function(){return e},e}function Z(){var e=Object(k.a)(["\n{\n    me {\n        _id\n        username\n        email\n        employer\n        number\n        name\n        createdJobs {\n            _id\n            company\n            createdAt\n            title\n            contact\n            description\n            requirements\n        }\n        createdApplications {\n            _id\n            resume\n            createdAt\n            appliedJob {\n                _id\n                company\n            }\n        }\n    }\n}\n"]);return Z=function(){return e},e}var ee=x()(Z()),ae=x()(X()),te=x()(Y()),ne=(x()(Q()),t(57),function(e){var a=e.jobs;return console.log(a),r.a.createElement("div",null,a&&a.map((function(e){return r.a.createElement(o.b,{to:"/jobpage/".concat(e._id)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Company:")," ",e.company),r.a.createElement("li",null,r.a.createElement("strong",null,"Job Title:")," ",e.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Requirements:")," ",e.requirements),r.a.createElement("li",null,r.a.createElement("strong",null,"Created At:"),e.createdAt),r.a.createElement("li",null,r.a.createElement("strong",null,"Contact:")," ",e.contact)))))})))}),re=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],m=o[1],d=Object(s.useQuery)(ae),b=d.loading,E=d.data,v=(null===E||void 0===E?void 0:E.jobs)||[];console.log(v);var g=Object(n.useState)(localStorage.getItem("saved_jobs")?JSON.parse(localStorage.getItem("saved_jobs")):[]),y=Object(u.a)(g,2),j=y[0],N=(y[1],Object(s.useMutation)(F));Object(u.a)(N,1)[0];Object(n.useEffect)((function(){return function(){var e;(e=j).length?localStorage.setItem("saved_jobs",JSON.stringify(e)):localStorage.removeItem("saved_jobs")}}));var k=function(){var e=Object(h.a)(f.a.mark((function e(a){var t,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),i){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&q=".concat(i));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:n=e.sent,r=n.items,c=r.map((function(e){return{JobId:e._id,authors:e.title||["No author to display"],company:e.company,description:e.description}})),l(c),m(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{fluid:!0,id:"dark-purple",className:"text-light center purple-mountain"},r.a.createElement(p.a,null,r.a.createElement("h3",null,"Find your next job"),r.a.createElement(w.a,{onSubmit:k},r.a.createElement(w.a.Row,null,r.a.createElement(H.a,{xs:3,md:8},r.a.createElement(w.a.Control,{className:"center",name:"searchInput",value:i,onChange:function(e){return m(e.target.value)},type:"text",size:"",placeholder:"Search for a Job"})),r.a.createElement(H.a,{xs:12,md:4},r.a.createElement(O.a,{type:"submit",variant:"primary",size:""},"Search")))))),r.a.createElement(p.a,{id:"light-purple"},r.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a job to begin"),r.a.createElement("div",null,b?r.a.createElement("div",null,"Loading..."):r.a.createElement(ne,{jobs:v})," ")))};var le=function(e){return r.a.createElement("div",{className:"jobcon"},e.children)},ce=function(){var e=Object(n.useState)({company:"",createdAt:"",contact:"",description:"",requirements:""}),a=Object(u.a)(e,2),t=(a[0],a[1],Object(n.useState)(!1)),l=(Object(u.a)(t,1)[0],Object(n.useState)(!1)),c=Object(u.a)(l,2),o=(c[0],c[1],Object(s.useQuery)(ee)),i=o.loading,m=o.data,d=(null===m||void 0===m?void 0:m.me)||[];console.log(d);var p=d.createdJobs;return console.log("Our user job data is: ",d),r.a.createElement(le,null,r.a.createElement("section",null,r.a.createElement("div",{className:"smallheading"},r.a.createElement("h3",{className:"card-title"},"Jobs you have posted"))),r.a.createElement("div",null,i?r.a.createElement("div",null,"Loading..."):r.a.createElement(ne,{jobs:p})," "))},oe=function(){var e=Object(n.useState)({resume:"",jobId:""}),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,1)[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1],b=window.location.pathname.split("/")[2],E=Object(s.useQuery)(te,{variables:{id:b}}),v=(E.loading,E.data),g=(null===v||void 0===v||v.job,Object(s.useMutation)(W)),k=Object(u.a)(g,2),S=k[0],x=k[1].error;Object(n.useEffect)((function(){p(!!x)}),[x]);var C=function(){var e=Object(h.a)(f.a.mark((function e(a){var n,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.currentTarget,r=localStorage.getItem("id_token"),!1===n.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=4,t.jobId=b,console.log("our user form data is: ",t),e.next=9,S({variables:{resume:t.resume,jobId:t.jobId}});case 9:c=e.sent,o=c.data,console.log("our data is: ",o),M.login(r),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0),p(!0);case 19:l({resume:"",jobId:""});case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:C},r.a.createElement(N.a,{dismissible:!0,onClose:function(){return p(!1)},show:d,variant:"danger"},"Something went wrong with your Application submission!"),r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,{htmlFor:"resume"},"Resume Link"),r.a.createElement(w.a.Control,{type:"text",placeholder:"https://docs.google.com/resume.doc",name:"resume",onChange:function(e){var a=e.target,n=a.name,r=a.value;console.log(n," is being changed to: ",r),l(Object(j.a)(Object(j.a)({},t),{},Object(y.a)({},n,r)))},value:t.resume,required:!0}),r.a.createElement(w.a.Control.Feedback,{type:"invalid"},"A resume link is required!")),r.a.createElement(O.a,{disabled:!t.resume,type:"primary",variant:"success"},"Submit")))},ie=function(e){var a=e.applications;return console.log(a),r.a.createElement("div",null,a&&a.map((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"content"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Contact:")," ",e.contact),r.a.createElement("li",null,r.a.createElement("strong",null,"Resume Link:")," ",e.resume),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",e.status),r.a.createElement("li",null,r.a.createElement("strong",null,"Created At:"),e.createdAt)))))})))},se=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({company:"",createdAt:"",contact:"",description:"",requirements:""}),o=Object(u.a)(c,2),i=(o[0],o[1],localStorage.getItem("id_token"),window.location.pathname.split("/")[2]),m=Object(s.useQuery)(ee),d=m.data,p=m.loading,b=Object(s.useQuery)(te,{variables:{id:i}}),v=b.data,g=(b.loading,(null===v||void 0===v?void 0:v.job)||{}),f=(null===d||void 0===d?void 0:d.me)||{};console.log("my job's applications are: ",g.jobApplications),console.log("Am I an employer? ",f);var h=g.contact==f.email&&f.employer;return console.log("EMployer listing check is: ",h),h?r.a.createElement("div",null,r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Company:")," ",g.company),r.a.createElement("li",null,r.a.createElement("strong",null,"Job Title:")," ",g.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Requirements:")," ",g.requirements),r.a.createElement("li",null,r.a.createElement("strong",null,"Created At:"),g.createdAt),r.a.createElement("li",null,r.a.createElement("strong",null,"Contact:")," ",g.contact))),r.a.createElement("div",null))),r.a.createElement(le,null,r.a.createElement("section",null,r.a.createElement("div",{className:"smallheading"},r.a.createElement("h3",{className:"card-title"},"Applications you have received"))),r.a.createElement("div",null,p?r.a.createElement("div",null,"Loading..."):r.a.createElement(ie,{applications:g.jobApplications})))):r.a.createElement("div",null,r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Company:")," ",g.company),r.a.createElement("li",null,r.a.createElement("strong",null,"Job Title:")," ",g.title),r.a.createElement("li",null,r.a.createElement("strong",null,"Requirements:")," ",g.requirements),r.a.createElement("li",null,r.a.createElement("strong",null,"Created At:"),g.createdAt),r.a.createElement("li",null,r.a.createElement("strong",null,"Contact:")," ",g.contact))),r.a.createElement("div",null,r.a.createElement(O.a,{type:"primary",variant:"success",onClick:function(){return l(!0)}},"Submit Application Here!")))),r.a.createElement(E.a,{size:"lg",show:t,onHide:function(){return l(!1)},"aria-labelledby":"submitapplication-modal"},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,{id:"submitapplication-modal"},"Enter Resume Link")),r.a.createElement(E.a.Body,null,r.a.createElement(oe,{handleModalClose:function(){return l(!1)}}))))},me=t(119),ue=t.n(me),de=(t(141),t(66)),pe=function(){var e=Object(n.useState)({email:"",password:"",name:"",number:""}),a=Object(u.a)(e,2),t=(a[0],a[1],Object(n.useState)(!1)),l=(Object(u.a)(t,1)[0],Object(n.useState)(!1)),c=Object(u.a)(l,2),o=(c[0],c[1],Object(de.useQuery)(ee)),i=o.loading,s=o.data,m=(null===s||void 0===s?void 0:s.me)||{};return console.log("our current user's data is: ",m),i?r.a.createElement("h2",null,"LOADING..."):r.a.createElement("div",{className:"emp-profile"},r.a.createElement("form",{method:"post"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"profile-img"},r.a.createElement("img",{src:ue.a,alt:""}),r.a.createElement("div",{className:"file btn btn-lg btn-primary"},"Change Photo",r.a.createElement("input",{type:"file",name:"file"})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"profile-head"},r.a.createElement("h5",null,m.username),r.a.createElement("h6",null,"Web Developer and Designer"),r.a.createElement("p",{className:"proile-rating"},"RANKINGS : ",r.a.createElement("span",null,"10/10")),r.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"},"Timeline"))))),r.a.createElement("div",{className:"col-md-2"},r.a.createElement("input",{type:"submit",className:"profile-edit-btn",name:"btnAddMore",value:"Edit Profile"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"profile-work"},r.a.createElement("p",null,"WORK LINK"),r.a.createElement("a",{href:""},"Profile"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"Bootsnipp Profile"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"Bootply Profile"),r.a.createElement("p",null,"SKILLS"),r.a.createElement("a",{href:""},"Web Designer"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"Web Developer"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"WordPress"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"WooCommerce"),r.a.createElement("br",null),r.a.createElement("a",{href:""},"PHP, .Net"),r.a.createElement("br",null))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"tab-content profile-tab",id:"myTabContent"},r.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"User Id")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,m.username))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Name")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,m.name))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Email")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,m.email))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Phone")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,m.number))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Profession")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"Web Developer and Designer")))),r.a.createElement("div",{className:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Experience")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"Expert"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Salary")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"89,000/yr"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Total Projects")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"230"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"English Level")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"Expert"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",null,"Availability")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"6 months"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",null,"Your Bio"),r.a.createElement("br",null),r.a.createElement("p",null,"Your detail description")))))))))},be=(t(142),function(){var e=Object(n.useState)({company:"",title:"",requirements:"",contact:"",description:""}),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,1)[0],i=Object(n.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1],b=Object(s.useMutation)(T),E=Object(u.a)(b,2),v=E[0],g=E[1].error;Object(n.useEffect)((function(){p(!!g)}),[g]);var k=function(e){var a=e.target,n=a.name,r=a.value;console.log(n," is being changed to: ",r),l(Object(j.a)(Object(j.a)({},t),{},Object(y.a)({},n,r)))},S=function(){var e=Object(h.a)(f.a.mark((function e(a){var n,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.currentTarget,r=localStorage.getItem("id_token"),console.log("the form is: ",n),!1===n.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=5,console.log("our user data is: ",t),e.next=9,v({variables:Object(j.a)({},t)});case 9:c=e.sent,o=c.data,console.log("our data result is: ",o),M.login(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:l({company:"",title:"",requirements:"",email:"",description:""});case 19:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:S},r.a.createElement(N.a,{dismissible:!0,onClose:function(){return p(!1)},show:d,variant:"danger"},"Something went wrong with your Job Posting!"),r.a.createElement("div",{className:"div"},r.a.createElement("div",{className:"container-fluid containerstyle"},r.a.createElement("div",{style:{clear:"both",paddingTop:"40px"}},r.a.createElement("p",{className:"lead jobtext",style:{marginLeft:"39%"}},"Reach quality candidates")),r.a.createElement("form",{className:"jobform"},r.a.createElement("div",{className:"form-group filter-message-box"},r.a.createElement("i",{className:"fa fa-building"}," "),r.a.createElement("input",{type:"text",className:"form-control",id:"company",placeholder:"Company",onChange:k,name:"company"})),r.a.createElement("div",{className:"form-group filter-message-box"},r.a.createElement("i",{className:"fa fa-suitcase"}," "),r.a.createElement("input",{type:"text",className:"form-control",id:"title",placeholder:"Job title",onChange:k,name:"title"})),r.a.createElement("div",{className:"form-group filter-message-box"},r.a.createElement("i",{className:"fa fa-map-marker"}," "),r.a.createElement("input",{type:"text",className:"form-control",id:"requirements",placeholder:"Responsiablitys",onChange:k,name:"requirements"})),r.a.createElement("div",{className:"form-group filter-message-box"},r.a.createElement("i",{className:"fa fa-building"}," "),r.a.createElement("input",{type:"text",className:"form-control",id:"contact",placeholder:"Contact Email",onChange:k,name:"contact"})),r.a.createElement("div",{className:"form-group filter-message-box"},r.a.createElement("i",{className:"fa fa-building"}," "),r.a.createElement("input",{type:"text",className:"form-control",id:"description",placeholder:"Job Description",onChange:k,name:"description"})),r.a.createElement(O.a,{disabled:!(t.company&&t.title&&t.requirements&&t.contact),type:"primary",variant:"success",className:"btn btn-lg submitbutton wow-page__submit-button"},"Post Job")))))}),Ee=new m.a({request:function(e){console.log("007 operation: ",e);var a=localStorage.getItem("id_token");console.log("our client app.js is saying our token is: ",a),e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"http://localhost:3001/graphql"});var ve=function(){return r.a.createElement(s.ApolloProvider,{client:Ee},r.a.createElement(o.a,null,r.a.createElement(K,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:re,exact:!0}),r.a.createElement(i.a,{path:"/jobshome",component:ce,exact:!0}),r.a.createElement(i.a,{path:"/jobpage/:id",component:se,exact:!0}),r.a.createElement(i.a,{path:"/profile",component:pe,exact:!0}),r.a.createElement(i.a,{path:"/postjob",component:be,exact:!0}),r.a.createElement(i.a,{render:function(){return r.a.createElement("h1",{className:"display-2"},"Wrong page!")}}))))},ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ge?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(a,e)}))}}()},57:function(e,a,t){},90:function(e,a,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.77ed11ed.chunk.js.map