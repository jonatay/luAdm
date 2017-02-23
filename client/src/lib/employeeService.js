/**
 * Created by Jono on 17 02 21.
 */

const apiFetch = (resource) => {
  return fetch('api/' + resource)
    .then((res) => {
      return res.json();
    });
}

export const loadEmployees = () => {
  return apiFetch('employees')
    .then((res) => {
      return res.results;
    })
    .catch((err) => {
      console.log('whoops:', err);
    });
}

// function search(query, cb) {
//   return fetch(`api/employees?q=${query}`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
//     .then(cb)
//     .catch((err) => {
//       console.log('whoops:', err);
//     });
// }
//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }
//
// function parseJSON(response) {
//   return response.json();
// }
//
// const srvEmployees = {search};
// export default srvEmployees;