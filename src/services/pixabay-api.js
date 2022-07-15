import axios from 'axios';

export const getImagesByDescription = async (description, page = 1) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  axios.defaults.params = {
    key: '27605426-0fda2c4b0cfa268906a19ec96',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
  };

  const params = {
    q: description,
    page: page,
  };

  const pixabay = axios.create({ params });

  try {
    return await pixabay.get();
  } catch (error) {
    return error.message;
  }
};
