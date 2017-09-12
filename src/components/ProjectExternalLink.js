import React from 'react';

const ProjectExternalLink = (props) => (
  <li className="c-portfolio-project-links-list__item">
    <a
      className="c-portfolio-project-links-list__link"
      href={props.link.url}
      target="_blank"
      rel="noopener noreferrer">
      <span className={props.link.icon} aria-hidden="true"/>
      <span className="u-visually-hidden">{props.link.name}</span>
    </a>
  </li>
);

export default ProjectExternalLink;
