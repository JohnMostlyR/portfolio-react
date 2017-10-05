import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProjectExternalLink from './ProjectExternalLink';

const UL = styled.ul`
  height: 1.5em;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

const ProjectLinksList = (props) => (
  <UL>
    {
      props.links.map(
        (link) => (
          <ProjectExternalLink
            key={link.name}
            name={link.name}
            url={link.url}
            icon={link.icon}
          />
        )
      )
    }
  </UL>
);

ProjectLinksList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

export default ProjectLinksList;