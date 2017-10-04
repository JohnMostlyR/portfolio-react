import React from 'react';
import PropTypes from 'prop-types';
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
  <ListItem data-tip={props.name}>
    <Link
      href={props.url}
      target="_blank"
      rel="noopener noreferrer">
      <span className={props.icon} aria-hidden="true"/>
      <LinkDescription>{props.name}</LinkDescription>
    </Link>
  </ListItem>
);

ProjectExternalLink.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

ProjectExternalLink.defaultPropTypes = {
  name: 'Name',
  url: '#',
};

export default ProjectExternalLink;
