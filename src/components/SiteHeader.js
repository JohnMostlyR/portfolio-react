import React from 'react';
import SiteNavigation from '../components/SiteNavigation';
import SocialLinks from '../components/SocialLinks';

import MyLogo from '../images/my-logo.svg';

const SiteHeader = (props) => {
  return (
    <header role="banner" className="c-portfolio-global-header">
      <div className="c-portfolio-page-header__banner u-clearfix">
        <div className="c-portfolio-global-header__brand">
          <a className="c-portfolio-global-header__link" href={'/intro'}>
            <div className='o-media'>
              <img className="o-media__img c-portfolio-global-header__brand-logo" src={MyLogo} alt="logo"/>
              <div className='o-media__body'>
                <span>JOHAN</span><br/><span>MEESTER</span>
              </div>
            </div>
          </a>
        </div>
        <SocialLinks/>
      </div>
      <SiteNavigation/>
    </header>
  );
};

export default SiteHeader;
