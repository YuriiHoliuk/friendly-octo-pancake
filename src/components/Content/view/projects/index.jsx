import React from 'react';

import Project from './project';
// import './index.scss';

const Projects = (props) => {
  const { projects } = props;
  console.log('projects', projects);
  return (
    <div className="projects">
      <div className="projects__container">
        {
          (Array.isArray(projects)) && projects.map((project) => (<Project key={project.data.id} project={project} />))
        }
      </div>
    </div>
  );
};

export default Projects;
