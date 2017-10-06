import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderSpeechBubble from '../components/HeaderSpeechBubble';
import H2 from '../components/H2';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  padding-left: 1em;
`;

const PageHeader = (props) => (
  <StyledHeader>
    <HeaderSpeechBubble isLeftHanded={props.isLeftHanded}>
      <H2>{props.title}</H2>
    </HeaderSpeechBubble>
  </StyledHeader>
);

PageHeader.propTypes = {
  isLeftHanded: PropTypes.bool,
  title: PropTypes.string,
};

export default PageHeader;
