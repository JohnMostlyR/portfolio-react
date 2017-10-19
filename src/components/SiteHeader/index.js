import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Brand from '../Brand';
import SiteNavigation from '../SiteNavigationBar';
import SocialLinks from '../SocialLinks';

import {clearfix} from '../../styles/mixins';

const Header = styled.header`
  flex: none;
  z-index: 10;
  background-color: #575756;
`;

const Wrapper = styled.div`
  border-bottom: .5vh solid #575756;
  
  ${clearfix}
`;

const SiteHeader = ({setSiteNavIsFixedOffset}) => (
    <Header role="banner">
      <Wrapper>
        <Brand/>
        <SocialLinks/>
      </Wrapper>
      <SiteNavigation setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}/>
    </Header>
);

SiteHeader.propTypes = {
  setSiteNavIsFixedOffset: PropTypes.func.isRequired,
};

export default SiteHeader;
