import React from 'react';
import styled from 'styled-components';
import typography from '../../styles/templates/typography';
import {visuallyHidden} from '../../styles/mixins';

const ListItem = styled.li`
  display: inline-block;
  margin-right: 1vw;
  transition: transform .2s ease-in-out;
  vertical-align: middle;

  &:hover {
    transform: scale(1.5);
  }
`;

const Link = styled.a`
  color: #fff;
  ${typography.doublePica}
`;

const LinkDescription = styled.span`
  ${visuallyHidden}
`;

const ProjectExternalLink = (props) => (
  <ListItem data-tip={props.link.name}>
    <Link
      href={props.link.url}
      target="_blank"
      rel="noopener noreferrer">
      <span className={props.link.icon} aria-hidden="true"/>
      <LinkDescription>{props.link.name}</LinkDescription>
    </Link>
  </ListItem>
);

export default ProjectExternalLink;
