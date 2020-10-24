// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchCareerJobs = (query) => {
    return fetch(`http://api.jobs2careers.com/api/search.php?id=273&pass=HkdyhY4qQUmJXi5p&q=${query}`);
  };
  