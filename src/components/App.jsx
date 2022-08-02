import React, { useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [description, setDescription] = useState('');

  const onSearchSubmit = text => {
    if (text !== description) {
      setDescription(text);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Searchbar onSubmit={onSearchSubmit} />
      <ImageGallery description={description} />
    </>
  );
};
