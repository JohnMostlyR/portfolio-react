import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import StyledUL from './StyledUL';
import StyledLI from './StyledLI';
import SiteNavLink from './SiteNavLink';
import SiteNavigationIcon from './SiteNavigationIcon';
import Description from './Description';

const NavigationItems = (props, context) => {
  return (
    <StyledUL>
      <StyledLI>
        <SiteNavLink to={'/'} data-isactive={context.router.route.location.pathname === '/'}>
          <SiteNavigationIcon name={'home'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.home'
                              defaultMessage='Intro'
            />
          </Description>
        </SiteNavLink>
      </StyledLI>
      <StyledLI>
        <SiteNavLink to={'/about'}
                     data-isactive={context.router.route.location.pathname === '/about'}>
          <SiteNavigationIcon name={'address-card'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.about'
                              defaultMessage='About'
            />
          </Description>
        </SiteNavLink>
      </StyledLI>
      <StyledLI>
        <SiteNavLink to={'/skills'}
                     data-isactive={context.router.route.location.pathname === '/skills'}>
          <SiteNavigationIcon name={'code'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.skills'
                              defaultMessage='Skills'
            />
          </Description>
        </SiteNavLink>
      </StyledLI>
      <StyledLI>
        <SiteNavLink to={'/projects'}
                     data-isactive={context.router.route.location.pathname === '/projects'}>
          <SiteNavigationIcon name={'list'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.projects'
                              defaultMessage='Projects'
            />
          </Description>
        </SiteNavLink>
      </StyledLI>
      <StyledLI>
        <SiteNavLink to={'/contact'}
                     data-isactive={context.router.route.location.pathname === '/contact'}>
          <SiteNavigationIcon name={'send'} fixedWidth/>
          <Description>
            <FormattedMessage id='portfolio.nav.contact'
                              defaultMessage='Contact'
            />
          </Description>
        </SiteNavLink>
      </StyledLI>
    </StyledUL>
  )
};

NavigationItems.contextTypes = {
  router: PropTypes.object,
};

export default NavigationItems;
