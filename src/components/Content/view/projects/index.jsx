import React from 'react';

import Project from './project';
// import './index.scss';

const Projects = (props) => {
  const { projects } = props;
  const lepestok = {
    data: {
      homepage: 'https://lepestok.top/',
      name: 'lepestok',
      description: 'Flexbox / Woocommerce / SEO / Google, FCB Ads',
    },
  };
  console.log('projects', projects);
  return (
    <div className="projects">
      <button type="button" aria-label="Get projects" onClick={() => props.startLoading()} className={!props.projects.length ? 'get' : 'get get-disabled'} />
      <div className="projects__container">

        {
          (Array.isArray(projects)) && projects.map((project) => (
            <Project key={project.data.id} project={project} />
          ))
        }
        {
          (Array.isArray(projects)) && (<Project project={lepestok} />)
        }
      </div>
    </div>
  );
};

export default Projects;
