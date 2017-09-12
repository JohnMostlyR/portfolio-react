import React from 'react';
import {projects} from '../data/projects';
import ProjectExternalLink from './ProjectExternalLink';

const Projects = () => {
  return (
    <ul className="c-portfolio-projects">
      {
        projects.map((project, idx) => (
          <li key={idx} className="c-portfolio-projects__project">
            <article className="c-portfolio-project">
              <figure className="c-portfolio-media-asset">
                <div className="c-portfolio-media-asset__body">
                  <div className="c-portfolio-media-asset__image o-responsive-image o-responsive-image--16by9">
                    <img src={project.thumbnailUrl} alt="Project"/>
                  </div>
                </div>
              </figure>
              <div className="c-portfolio-project__body">
                <div className="c-portfolio-project-header">
                  <div className="l-portfolio-project-header__title">
                    <h2 className="c-portfolio-project-header__title">{project.title}</h2>
                    <ul className="o-list-inline c-portfolio-project-links-list">
                      {
                        project.links.map(link => <ProjectExternalLink key={link.name} link={link}/>)
                      }
                    </ul>
                  </div>
                  <p className="c-portfolio-project-header__sub-title"><strong>{project.details.title}</strong>
                  </p>
                </div>
                <p className="c-portfolio-project-description">{project.details.bodyText}</p>
              </div>
            </article>
          </li>
        ))
      }
    </ul>
  )
};

export default Projects;
