import React from 'react';
import styled from 'styled-components';
import HeaderSpeechBubble from '../HeaderSpeechBubble';
import HeaderH2 from '../HeaderH2';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  padding-left: 1em;
`;

const PageHeader = (props) => (
  <StyledHeader>
    <HeaderSpeechBubble isLeftHanded={props.isLeftHanded}>
      <HeaderH2>{props.title}</HeaderH2>
    </HeaderSpeechBubble>
  </StyledHeader>
);


export default PageHeader;
