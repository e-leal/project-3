# project-3

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

mutation addJob($company: String!, $contact: String!, $description: String!, $requirements: String!) {
  addJob(company: $company, contact: $contact, description: $description, requirements: $requirements) {
    	company
    	contact
    	description
    	requirements
    }
}