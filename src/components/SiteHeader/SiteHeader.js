import React from 'react';
import styled from 'styled-components';
import {clearfix} from '../../helpers/styles/mixins';
import Brand from './Brand';
import SiteNavigation from './SiteNavigation';
import SocialLinks from './SocialLinks';

const StyledHeader = styled.header`
  width: 100%;
  z-index: 10;
  background-color: #575756;
`;

const Wrapper = styled.div`
  border-bottom: .5vh solid #575756;
  
  ${clearfix}
`;

const SiteHeader = (props) => {
  return (
    <StyledHeader role="banner">
      <Wrapper>
        <Brand/>
        <SocialLinks/>
      </Wrapper>
      <SiteNavigation/>
    </StyledHeader>
  );
};

export default SiteHeader;
