// save job data for a logged in user
export const saveJob = (jobData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(jobData),
  });
};
// remove saved book data for a logged in user
export const deleteJob = (jobId, token) => {
  return fetch(`/api/users/jobs/${jobId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchCareerJobs = (query) => {
    return fetch(`http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&q=${query}`);
  };
  