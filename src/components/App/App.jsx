import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import Header from '../Header/index';
import Content from '../Content';

import './App.scss';

const App = (props) => {
  useEffect(() => {
    props.startLoading();
  });

  return (
    <div className="App">
      <div className="flex-wrap">
        <div className="pen" />
        <div className="cup" />
        <div className="ihpone" />
        <div className="projects">
          <div className="projects__project projects__project-main">Get projects</div>
          <div className="projects__project projects__project1">Uber eats</div>
          {/* <div className="projects__lepestok" /> */}
        </div>
        <Content />
      </div>
    </div>
  );
};

export default App;

App.propTypes = {
  startLoading: PropTypes.func.isRequired,
};
