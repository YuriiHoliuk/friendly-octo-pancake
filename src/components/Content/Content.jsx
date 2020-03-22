import React from 'react';

import CV from './view/cv';
import Projects from './view/projects';

const Content = ({ data }) => (
  <>
    <Projects projects={data} />
    <CV />
  </>

);

export default Content;
