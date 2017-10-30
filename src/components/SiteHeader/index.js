import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Wrapper from './Wrapper';

import Brand from '../Brand';
import SiteNavigation from '../SiteNavigationBar';
import SocialLinks from '../SocialLinks';

const SiteHeader = ({setSiteNavIsFixedOffset, siteNavIsAtScreenTop}) => (
    <Header role="banner">
      <Wrapper>
        <Brand/>
        <SocialLinks/>
      </Wrapper>
      <SiteNavigation setSiteNavIsFixedOffset={setSiteNavIsFixedOffset} siteNavIsAtScreenTop={siteNavIsAtScreenTop}/>
    </Header>
);

SiteHeader.propTypes = {
  setSiteNavIsFixedOffset: PropTypes.func.isRequired,
  siteNavIsAtScreenTop: PropTypes.bool,
};

export default SiteHeader;
