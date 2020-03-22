import React from 'react';

import Project from './project';
// import './index.scss';

const Projects = (props) => {
  const { projects } = props;
  console.log('projects', projects);
  return (
    <div className="projects">
      {
          (Array.isArray(projects)) && projects.map((project) => (<Project key={project.data.id} project={project} />))
    }
    </div>
  );
};

export default Projects;
