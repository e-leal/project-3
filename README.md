# project-3

## Description
Certaintly is a Job Search tool that 


## Table of Contents

  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Technologies](#technologies)
  * [Contribution](#contribution)
  * [Questions](#questions) 

## Features

* New Users:
  * Are able to create an account either as an employer or an employee

* Employers (Job Creator):
  * Are able to create Jobs/Listings
  * View Applications made by Employees to Jobs created by the Employers (Only the Employers are able to view the application)
  * Are able to Remove Job listings created by said Employer

* Employees (Job Seeker):
  * Are capable to create Applications that will tie to a Job
  * Are able to view their Applications that was created by themselves


## Installation


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
