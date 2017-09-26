import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {throttle} from 'lodash';
import 'scrolling-element';
import styled from 'styled-components';
import mq from '../../helpers/styles/templates/mediaQueries';
import typography from '../../helpers/styles/templates/typography';

const SiteNavigationNav = styled.nav`
  padding: 1vh 0;
  background-color: #575756;

  ${mq.m`
    left: 100%;
    position: absolute;
    top: 77px;
    transform: rotate(90deg);
    transform-origin: top left;
    background-color: transparent;
    border-bottom: none;  
  `}
`;

const SiteNavigationUL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.m`justify-content: flex-start;`}
`;

const SiteNavigationLI = styled.li`
  vertical-align: middle;

  ${mq.m`margin-top: 2vw;`}

  &:not(:first-child) {
    ${mq.m`margin-left: 1vh;`}
  }
`;

const SiteNavigationNavLink = styled(NavLink)`
  display: inline-block;
  position: relative;
  background-color: #FF6633;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  padding: 0.5em;
  text-align: center;
  text-decoration: none !important;
  transition: background-color 0.3s, color 0.3s;

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
  
  &.is-active {
    background-color: transparent;
    color: #FF6633;

    &::before {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;

const SiteNavigationIcon = styled.span`
  display: none !important;

  ${mq.m`
    display: inherit !important;
    transform: rotate(-90deg);
    margin: 0;
  `}
`;

const SiteNavigationDescription = styled.span`
  ${mq.m`margin-left: .5rem;`}

  @media all and (orientation: landscape) and (min-width: 37.5em) {
    display: none;
  }

  @media all and (orientation: landscape) and (min-height: 37.5em) {
    display: inline;
  }
`;

class SiteNavigation extends Component {
  state = {
    myTopPosition: 0,
    topPositionOffset: 0,
  };

  _getElementTop = (element) => {
    let actualTop = element.offsetTop;
    let currentParent = element.offsetParent;

    while (currentParent !== null) {
      actualTop += currentParent.offsetTop;
      currentParent = currentParent.offsetParent;
    }

    return actualTop;
  };

  handleScrollEvent = (ev) => {
    let delta = (this.state.myTopPosition - ev.target.scrollingElement.scrollTop);
    if (delta <= 0) {
      this.setState({topPositionOffset: Math.abs(delta)});
    } else {
      this.setState({topPositionOffset: 0});
    }
  };

  componentDidMount() {
    const myTopPosition = this._getElementTop(this.siteNavigation);
    this.setState({myTopPosition});
    document.addEventListener('scroll', throttle(this.handleScrollEvent, 2));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollEvent);
  }

  render() {
    const pages = [
      {
        description: 'Intro',
        icon: 'fa fa-home fa-fw',
        navigateTo: 'intro',
      },
      {
        description: 'About',
        icon: 'fa fa-address-card fa-fw',
        navigateTo: 'about',
      },
      {
        description: 'Skills',
        icon: 'fa fa-code fa-fw',
        navigateTo: 'skills',
      },
      {
        description: 'Projects',
        icon: 'fa fa-list fa-fw',
        navigateTo: 'projects',
      },
      {
        description: 'Contact',
        icon: 'fa fa-send fa-fw',
        navigateTo: 'contact',
      },
    ];

    const setStyle = () => {
      if (this.state.topPositionOffset) {
        return (
          {
            position: 'absolute',
            top: (this.state.myTopPosition + this.state.topPositionOffset + 16),
            zIndex: 10,
          }
        );
      } else {
        return ({});
      }
    };

    return (
      <SiteNavigationNav style={setStyle()} innerRef={el => this.siteNavigation = el}>
        <SiteNavigationUL>
          {
            pages.map((page, idx) => {
              return (
                <SiteNavigationLI key={idx}>
                  <SiteNavigationNavLink
                    to={`/${page.navigateTo}`}
                    activeClassName='is-active'
                  ><SiteNavigationIcon
                    className={`${page.icon} ${this.props.className}`}
                    aria-hidden="true"/><span><SiteNavigationDescription>{page.description}</SiteNavigationDescription></span>
                  </SiteNavigationNavLink>
                </SiteNavigationLI>
              );
            })
          }
        </SiteNavigationUL>
      </SiteNavigationNav>
    );
  }
}

export default SiteNavigation;
