import axios from 'axios';

export function fetchFilters() {

}

export function fetchCategories(repos) {
  const promises = repos.map((rep) => axios.get(rep.url));

  return axios.all(promises).then((results) => results);
}
