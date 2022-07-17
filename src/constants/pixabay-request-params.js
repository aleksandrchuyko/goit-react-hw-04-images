import axios from 'axios';

const KEY = '27605426-0fda2c4b0cfa268906a19ec96';
const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: PER_PAGE,
};
