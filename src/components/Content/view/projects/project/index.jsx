import React from 'react';

// import './index.scss';

const Project = ({ project }) => (
  <a href={project.data.homepage} target="_blank" rel="noopener noreferrer" className="project">
    <div className={`project__container project__name-${project.data.name}`}>
      <div className="project__name">{project.data.description}</div>
      {console.log('props.project', project.data)}
      <div className="project__image" />
    </div>
  </a>
);

export default Project;
