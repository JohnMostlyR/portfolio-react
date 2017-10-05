import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import typography from '../../styles/templates/typography';

import Icon from './Icon';
import Description from './Description';

const SiteNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  background-color: #FF6633;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.5em;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;

  ${typography.pica}
  
  &:active,
  &:hover {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    border: 1px solid #FF6633;
    border-radius: inherit;
    opacity: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);

    ${mq.m`
      border: 2px solid #FF6633;
      border-radius: 5px;
    `}
  }

  ${mq.m`
    border-radius: 5px;
    width: 7rem; // For IE and Edge who don't support the max-content prop.
    width: max-content;
  `}
  
  &.is-active {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;

const Link = (props) => (
  <SiteNavLink to={props.to} activeClassName="is-active">
    <Icon iconClassName={props.iconClassName}/><span><Description>{props.description}</Description></span>
  </SiteNavLink>
);

Link.propTypes = {
  to: PropTypes.string,
  iconClassName: PropTypes.string,
  description: PropTypes.string,
};

Link.defaultProps = {
  to: '#',
};

export default Link;