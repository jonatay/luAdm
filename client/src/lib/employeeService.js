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
      if (res.confirmation === 'success') {
        return res.results;
      } else {
        throw res;
      }
    })
    .catch((err) => {
      console.log('whoops:', err);
    });
}

