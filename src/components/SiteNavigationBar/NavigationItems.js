import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl} from 'react-intl';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import mq from '../../styles/templates/mediaQueries';
import typography, {baseFontStackSansSerif} from '../../styles/templates/typography';

const StyledUL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.m`justify-content: flex-start;`}
`;

const StyledLI = styled.li`
  vertical-align: middle;

  ${mq.m`margin-top: 2vw;`}

  &:not(:first-child) {
    ${mq.m`margin-left: 1vh;`}
  }
`;

const SiteNavLink = styled(Link)`
  display: inline-block;
  position: relative;
  background-color: #FF6633;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;

  font-family: ${baseFontStackSansSerif}
  font-weight: 400;
  ${typography.pica}
  
  &:active,
  &:hover {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  &::before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    border: 1px solid #FF6633;
    border-radius: inherit;
    opacity: 0;
    transform: scale3d(0.6, 0.6, 1);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);

    ${mq.m`
      border: 2px solid #FF6633;
      border-radius: 5px;
    `}
  }

  ${mq.m`
    border-radius: 5px;
    width: 7rem; // For IE and Edge who don't support the max-content prop.
    width: max-content;
  `}
  
  ${(props) => {
  if (props['data-isactive']) {
    return (`
      background-color: transparent;
      color: #FF6633;

      &::before {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    `);
  }
}}

  &.is-active {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;

const SiteNavigationIcon = styled(FontAwesome)`
  display: none !important;

  ${mq.m`
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  `}
`;

const Description = styled.span`
  ${mq.m`margin-left: .5rem;`}

  @media all and (orientation: landscape) and (min-width: 37.5em) {
    display: none;
  }

  @media all and (orientation: landscape) and (min-height: 37.5em) {
    display: inline;
  }
`;

const NavigationItems = (props, context) => (
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
);

NavigationItems.contextTypes = {
  router: PropTypes.object,
};

export default injectIntl(NavigationItems);
