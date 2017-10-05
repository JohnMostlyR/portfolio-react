import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {visuallyHidden} from '../../styles/mixins';

const A = styled.a`
  color: #575756;
  text-decoration: none;
`;

const VisuallyHiddenSpan = styled.span`
  ${visuallyHidden}
`;

const Link = (props) => (
  <A href={props.href} target="_blank" rel="noopener noreferrer">
    <span className={props.iconClass} aria-hidden="true"/><VisuallyHiddenSpan>{props.description}</VisuallyHiddenSpan>
  </A>
);

Link.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  iconClass: PropTypes.string,
};

Link.defaultProps = {
  description: 'Link to',
  href: '#',
};

export default Link;