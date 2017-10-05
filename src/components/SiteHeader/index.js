import React from 'react';
import Brand from '../Brand';
import SiteNavigation from '../SiteNavigation';
import SocialLinks from '../SocialLinks';

import Header from './Header';
import Wrapper from './Wrapper';

const SiteHeader = () => (
  <Header role="banner">
    <Wrapper>
      <Brand/>
      <SocialLinks/>
    </Wrapper>
    <SiteNavigation/>
  </Header>
);

export default SiteHeader;
