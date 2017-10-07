import React, {Component} from 'react';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

import List from './List';

const SiteNavigationNav = styled.nav`
  width: 100%;
  padding: 1vh 0;
  background-color: #575756;
  opacity: 1;
  transition: opacity .2s ease-out;

  ${mq.m`
    left: 100%;
    position: absolute;
    top: 77px;
    width: unset;
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
    isScrolling: false,
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
    if (this.state.isScrolling) {
      return;
    }

    let topPositionOffset = 0;
    let debounce = setTimeout(() => {
      let delta = (this.state.myTopPosition - ev.target.scrollingElement.scrollTop);

      if (delta <= 0) {
        topPositionOffset =  Math.abs(delta);
      }

      this.setState({
        topPositionOffset,
        isScrolling: 0,
      });
    }, 250);

    this.setState({
      isScrolling: debounce,
    });
  };

  componentDidMount() {
    const myTopPosition = this._getElementTop(this.siteNavigation);
    this.setState({myTopPosition});
    document.addEventListener('scroll', this.handleScrollEvent);
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
              top: (this.state.myTopPosition + this.state.topPositionOffset),
              zIndex: 10,
              opacity: (this.state.isScrolling ? 0 : 1),
            }
        );
      } else {
        return (
            {
              opacity: 1,
            }
        );
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
