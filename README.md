# project-3: Certainly

## Description
Certainly is a Job Search tool that helps Employers and Job Seekers keep track of their applications and listings.


## Table of Contents

  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Technologies](#technologies)
  * [Contribution](#contribution)
  * [Questions](#questions) 

## Features

### MINIMAL VIABLE PRODUCT (MVP):

* New Users:
  * CREATE NEW account
  * WHEN users SIGN UP, they are prompted to either having an employer account or an employee account.

* Employers (Job Creator):
  * WHEN employers LOG IN, they can CREATE a job
  * WHEN employers LOG IN, they can UPDATE or DELETE a job
  * WHEN employers LOG IN, they can CREATE a comment on an employee's application


* Employees (Job Seeker):
  * WHEN employees LOG IN, they are prompted to a QUERY of jobs and listings created recently by employers
  * WHEN employees LOG IN, they can POST applications to a job
  * WHEN employees LOG IN, they can look over all of their applications they had made.
  * WHEN employees LOG IN, they can CREATE and UPDATE their resume
  * WHEN employees LOG IN, they can comment on their own applications
  * WHEN employees LOG IN, they can add their resume to their applications
  * WHEN employees LOG OUT, they are logged out with the option to log back in

* Applications
  * WHEN application is posted, the employer is notified when he/she is logged in
  * WHEN application is posted, COMMENTS are enabled
  * WHEN comments are enabled, both employers and employees can comment.

* Jobs
  * WHEN job is posted, 


## Installation

Commence creating a clone or pulling from the Project repository into your local machine, then navigate the directories to the project-3 directory folder through the terminal

In the project-3 directory, there are two folders, the "client" folder and the "server" folder. you must use the terminal to go into those folders and install the "node_modules" folder as well as the dependencies that is needed to run this application in those folders as well as the root folder by using either of the following commands: 

> npm install

or 

> npm i

The dependencies should automatically be installed, however, you still need to set up the .env file, which will be covered in the Usage section.  

## Usage




## License


## Technologies

* [MongoDB](https://www.npmjs.com/package/mongodb)

* [Express.js](https://www.npmjs.com/package/express)

* [React](https://www.npmjs.com/package/react)

* [Node.js](https://www.npmjs.com/package/node)

* [dotenv](https://www.npmjs.com/package/dotenv)

## Contribution


## Questions

If you want us to answer any of your questions, follow our Githubs:

[e-leal](https://github.com/e-leal)
[jesusnboone](https://github.com/jesusnboone)
[Ceven8498](https://github.com/Ceven8498)
[ctyrone123](https://github.com/ctyrone123)
[Ottiemobile](https://github.com/Ottiemobile)
-----------------------------------------------------------------------------------------------------

mutation addUser($username: String!, $email: String!, $password: String!, $employer: Boolean!) {
  addUser(username: $username, email: $email, password: $password, employer: $employer) {
    token
    user {
      _id
    }
  }
}

mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}

mutation createJob($company: String!, $contact: String!, $description: String!, $requirements: String!) {
  createJob(company: $company, contact: $contact, description: $description, requirements: $requirements) {
    	company
    	contact
    	description
    	requirements
    }
}
