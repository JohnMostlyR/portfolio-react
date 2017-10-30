import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import styled from 'styled-components';

import SiteHeader from '../SiteHeader/index';
import routes from '../../routes';
import mq from '../../styles/templates/mediaQueries';
import {visuallyHidden} from '../../styles/mixins';
import {svgToURL} from '../../styles/tools';

const messages = defineMessages({
  title: {
    id: 'portfolio.title',
    defaultMessage: 'Welcome to my portfolio',
  },
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const H1 = styled.h1`
  ${visuallyHidden}
`;

const StyledMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  padding-top: ${props => `${props.fixedSiteNavOffset}px`};
  background-attachment: fixed;
  background-image: url(${svgToURL(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.5 196.3" preserveAspectRatio="xMaxYMid"><path fill="#AEE8FC" d="M41.88 103.97h16.64L50.2 89.55l-8.32-14.41-8.33 14.41-8.32 14.42z"/><path fill="#54D2FE" d="M11.44 56.67h11.44l-5.72-9.91-5.72-9.91-5.72 9.91L0 56.67z"/><path fill="#C9F0C4" d="M42.98 49.07h8.91l-4.46-7.72-4.45-7.71-4.45 7.71-4.46 7.72z"/><path fill="#D3EE32" d="M31.2 11.77h6.79l-3.4-5.88L31.2 0l-3.4 5.89-3.4 5.88z"/><path fill="#5DD2F9" d="M47.83 153.64H59.5l-5.83-10.11-5.84-10.11L42 143.53l-5.84 10.11z"/><path fill="#C8F1FD" d="M33.72 196.3h4.63l-2.32-4.02-2.31-4.01-2.32 4.01-2.32 4.02z"/></svg>')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 50%;
  
  ${mq.m`
    padding-top: 0;
  `}
`;

class App extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  };

  static childContextTypes = {
    scrollTop: PropTypes.number,
  };

  state = {
    _scrollTop: 0,
    _isScrolling: 0,
    _siteNavIsAtScreenTop: false,
    _siteNavIsFixedOffset: 0,
    _siteNavigationTopPosition: 0,
  };

  handleScrollEvent = (ev) => {
    if (this.state._isScrolling) {
      return;
    }

    if (ev.target && 'scrollingElement' in ev.target) {
      let debounce = setTimeout(() => {
        const isAtScreenTop = (ev.target.scrollingElement.scrollTop >=
            this.state._siteNavigationTopPosition)
            ? true
            : false;

        this.setState({
          _siteNavIsAtScreenTop: isAtScreenTop,
          _isScrolling: 0,
        });
      }, 0);

      this.setState({
        _isScrolling: debounce,
      });
    }
  };

  componentDidMount() {
    this.wrapper.ownerDocument.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    this.wrapper.ownerDocument.removeEventListener('scroll', this.handleScrollEvent);
  }

  getChildContext() {
    return {
      scrollTop: this.state._scrollTop,
    };
  }

  setSiteNavIsFixedOffset = ({siteNavigationTopPosition, siteNavigationOffsetHeight}) => {
    if (typeof siteNavigationTopPosition !== 'number') return;
    if (typeof siteNavigationOffsetHeight !== 'number') return;

    this.setState({
      _siteNavigationTopPosition: siteNavigationTopPosition,
      _siteNavIsFixedOffset: siteNavigationOffsetHeight,
    });
  };

  render() {
    return (
        <Wrapper innerRef={el => this.wrapper = el}>
          <H1>{this.props.intl.formatMessage(messages.title)}</H1>
          <SiteHeader setSiteNavIsFixedOffset={this.setSiteNavIsFixedOffset}
                      siteNavIsAtScreenTop={this.state._siteNavIsAtScreenTop}/>

          <StyledMain fixedSiteNavOffset={(_siteNavIsAtScreenTop) => this.state._siteNavIsFixedOffset}>
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route} />)}
              <Route render={() => (
                  <Redirect to='/'/>
              )}/>
            </Switch>
          </StyledMain>
        </Wrapper>
    );
  }
}

export default injectIntl(App);
