import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Content from '../Content';
// import './App.scss';

const App = (props) => (
  <div className="App">
    <div className="flex-wrap">
      <div className="pen" />
      <div className="cup" />
      <div className="iphone" />
      <Content />
    </div>
  </div>
);


export default App;

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
};
