import React, { Component } from 'react';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Box } from './Box';
import Utils from '../utils/index';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="start"
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >

      </Box>
    );
  }
}
