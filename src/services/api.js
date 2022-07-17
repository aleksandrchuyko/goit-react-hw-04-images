import axios from 'axios';

export const getImagesByDescription = async (description, page = 1) => {
  const params = {
    q: description,
    page: page,
  };

  const instance = axios.create({ params });

  try {
    return await instance.get();
  } catch (error) {
    return error.message;
  }
};
