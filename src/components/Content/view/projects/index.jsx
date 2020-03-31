import React, { useState } from 'react';

import Project from './project';
// import './index.scss';

const Projects = (props) => {
  const { projects } = props;
  const [flag, setAnimationFlag] = useState(false);

  const lepestok = {
    data: {
      homepage: 'https://lepestok.top/',
      name: 'lepestok',
      description: 'Flexbox / Woocommerce / SEO / Google, FCB Ads',
    },
  };

  const onClickGetProjects = () => {
    props.startLoading();
    setTimeout(() => setAnimationFlag(true), 500);
  };

  return (
    <div className="projects">
      <div className="projects__container">
        {
          (Array.isArray(projects)) && (<Project project={lepestok} animated={flag} />)
        }
        {
          (Array.isArray(projects)) && projects.map((project) => (
            <Project key={project.data.id} project={project} animated={flag} />
          ))
        }
        <div className="projects__scene">
          {
              (Array.isArray(projects)) && projects.map((project) => (
                <img
                  className={!flag
                    ? 'projects__getImg'
                    : `projects__getImg projects__getImg-${project.data.name}`}
                  src="/portfolio/img/projects.png"
                  alt="projects"
                />
              ))
            }
        </div>
        <button
          type="button"
          aria-label="GetFromGit-projects"
          onClick={() => onClickGetProjects()}
          className={
          !flag ? 'projects__getFromGit' : 'projects__getFromGit projects__getFromGit--disabled'
      } />
      </div>
    </div>
  );
};

export default Projects;
