import axios from 'axios';

export const getImagesByDescription = async (description, page = 1) => {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '27605426-0fda2c4b0cfa268906a19ec96',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 12,
  };

  params.q = description;
  params.page = page;

  try {
    return await axios.get(url, {
      params,
    });
  } catch (error) {
    return error.message;
  }
};
