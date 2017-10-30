import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import StyledUL from './StyledUL';
import StyledLI from './StyledLI';
import SiteNavLink from './SiteNavLink';
import SiteNavigationIcon from './SiteNavigationIcon';
import Description from './Description';
import SiteNavigation from './SiteNavigation';
import H2 from './H2';

import getElementTop from '../../utils/getElementTop';

class SiteNavigationBar extends Component {
  static propTypes = {
    setSiteNavIsFixedOffset: PropTypes.func.isRequired,
    siteNavIsAtScreenTop: PropTypes.bool.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  componentDidMount() {
    const myTopPosition = getElementTop(this.siteNavigation) || 0;
    const myOffsetHeight = this.siteNavigation.offsetHeight;
    this.props.setSiteNavIsFixedOffset({
      siteNavigationTopPosition: myTopPosition,
      siteNavigationOffsetHeight: myOffsetHeight,
    });
  }

  componentWillUnmount() {
    this.props.setSiteNavIsFixedOffset({
      siteNavigationTopPosition: 0,
      siteNavigationOffsetHeight: 0,
    });
  }

  render() {
    const CURRENT_PATHNAME = this.context.router.route.location.pathname;

    return (
        <SiteNavigation isAtScreenTop={this.props.siteNavIsAtScreenTop}
                        innerRef={el => this.siteNavigation = el}>
          <H2><FormattedMessage id='portfolio.nav.header' defaultMessage='Site navigation'/></H2>
          <StyledUL>
            <StyledLI>
              <SiteNavLink to={'/'} data-isactive={CURRENT_PATHNAME === '/'}>
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
                           data-isactive={CURRENT_PATHNAME === '/about'}>
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
                           data-isactive={CURRENT_PATHNAME === '/skills'}>
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
                           data-isactive={CURRENT_PATHNAME === '/projects'}>
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
                           data-isactive={CURRENT_PATHNAME === '/contact'}>
                <SiteNavigationIcon name={'send'} fixedWidth/>
                <Description>
                  <FormattedMessage id='portfolio.nav.contact'
                                    defaultMessage='Contact'
                  />
                </Description>
              </SiteNavLink>
            </StyledLI>
          </StyledUL>
        </SiteNavigation>
    );
  }
}

export default SiteNavigationBar;
