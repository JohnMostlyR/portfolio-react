import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

const SiteNavigationIcon = styled.span`
  display: none !important;

  ${mq.m`
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  `}
`;

const Icon = (props) => (
  <SiteNavigationIcon className={props.iconClassName} aria-hidden="true"><span>{props.children}</span></SiteNavigationIcon>
);

Icon.propTypes = {
  iconClassName: PropTypes.string,
};

export default Icon;