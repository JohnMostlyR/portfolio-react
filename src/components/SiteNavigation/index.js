import React, {Component} from 'react';
import {throttle} from 'lodash';
// import 'scrolling-element';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

import List from './List';

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
        <List/>
      </SiteNavigationNav>
    );
  }
}

export default SiteNavigation;
