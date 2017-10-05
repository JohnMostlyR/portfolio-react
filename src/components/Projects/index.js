import React from 'react';
import {projects} from '../../data/projects';

import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';
import Project from './Project';

const Projects = () => {
  return (
    <ProjectsList>
      {
        projects.map((project, idx) => (
          <ProjectsListItem key={idx}>
            <Project
              thumbnailUrl={project.thumbnailUrl}
              title={project.title}
              links={project.links}
              detailsTitle={project.details.title}
              detailsBodyText={project.details.bodyText}
              isOdd={!(idx % 2)}
            />
          </ProjectsListItem>
        ))
      }
    </ProjectsList>
  );
};

export default Projects;
