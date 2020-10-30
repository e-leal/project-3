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
  * WHEN users SIGN UP, they are prompted to either having an employer account or an employee account

* Employers (Job Creator):
  * WHEN employers LOG IN, they can CREATE a job
  * WHEN employers LOG IN, they can UPDATE or DELETE a job
  * WHEN employers LOG IN, they can CREATE a comment on an employee's application


* Employees (Job Seeker):
  * WHEN employees LOG IN, they are prompted to a QUERY of jobs and listings created recently by employers
  * WHEN employees LOG IN, they can POST applications to a job
  * WHEN employees LOG IN, they can look over all of their applications they had made
  * WHEN employees LOG IN, they can CREATE and UPDATE their resume
  * WHEN employees LOG IN, they can comment on their own applications
  * WHEN employees LOG IN, they can add their resume to their applications
  * WHEN employees LOG OUT, they are logged out to the main page with the option to log back in

* Applications
  * WHEN application is posted, the employer is notified when he/she is logged in
  * WHEN application is posted, COMMENTS are enabled
  * WHEN comments are enabled, both employers and employees can comment.

* Jobs
  * WHEN job is posted, employees are able to see them inside the Query
  * WHEN job is posted, employees will be able to POST an application for that job
  * WHEN job is posted, employers are able to UPDATE or DELETE that job
  * WHEN job is posted, employers are able to look at the applications that was posted to that job
  


## Installation

Commence creating a clone or pulling from the Project repository into your local machine, then navigate the directories to the project-3 directory folder through the terminal

In the project-3 directory, there are two folders, the "client" folder and the "server" folder. you must use the terminal to go into those folders and install the "node_modules" folder as well as the dependencies that is needed to run this application in those folders as well as the root folder by using either of the following commands: 

> npm install

or 

> npm i

The dependencies should automatically be installed.

## Usage

You can start the server by terminal in 2 ways:

> npm run watch

or

> npm start

make sure you are in the root folder so you can start the client end and the server end.


To stop the server, head to the terminal and type this command below:

> CTRL + C

> Y

This will stop the server connection.




## License

This project is covered by the MIT license.

![MIT license badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Technologies

* [MongoDB](https://www.npmjs.com/package/mongodb)

* [Express.js](https://www.npmjs.com/package/express)

* [React](https://www.npmjs.com/package/react)

* [Node.js](https://www.npmjs.com/package/node)

* [dotenv](https://www.npmjs.com/package/dotenv)

* [graphql](https://www.npmjs.com/package/graphql)

* [nodemon](https://www.npmjs.com/package/nodemon)

* [apollo](https://www.npmjs.com/package/apollo)

* [bcrypt](https://www.npmjs.com/package/bcrypt)

* []()





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
