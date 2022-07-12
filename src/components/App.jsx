import React, { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    description: '',
    page: 1,
  };

  onSearchSubmit = text => {
    if (text !== this.state.description) {
      this.setState({
        description: text,
        page: 1,
      });
    }
  };

  render() {
    const { description, page } = this.state;
    return (
      <>
        <GlobalStyles />
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        <ImageGallery description={description} page={page}></ImageGallery>
        
      </>
    );
  }
}
