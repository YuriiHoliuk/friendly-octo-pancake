import axios from 'axios';

export function fetchFilters() {
  const API_FILTERS = 'https://api.github.com/users/Vladyslav223/repos';
  return axios.get(API_FILTERS).then((res) => res);
}

export function fetchCategories(filters) {
  const promises = filters.map((element) => axios.get(element.url));

  return axios.all(promises).then((results) => results);
}
