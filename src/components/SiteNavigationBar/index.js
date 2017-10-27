import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import NavigationItems from './NavigationItems';
import SiteNavigation from './SiteNavigation';
import H2 from './H2';

import getElementTop from '../../utils/getElementTop';

class SiteNavigationBar extends Component {
  static propTypes = {
    setSiteNavIsFixedOffset: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      _myTopPosition: 0,
      _isAtScreenTop: false,
      _isScrolling: 0,
    };
  }

  handleScrollEvent = (ev) => {
    if (this.state._isScrolling) {
      return;
    }

    let debounce = setTimeout(() => {
      const isAtScreenTop = (ev.target.scrollingElement.scrollTop >= this.state._myTopPosition)
          ? true
          : false;

      this.setState({
        _isAtScreenTop: isAtScreenTop,
        _isScrolling: 0,
      });

      if (isAtScreenTop) {
        this.props.setSiteNavIsFixedOffset(this.siteNavigation.offsetHeight);
      } else {
        this.props.setSiteNavIsFixedOffset(0);
      }
    }, 0);

    this.setState({
      _isScrolling: debounce,
    });
  };

  componentDidMount() {
    this.setState({
      _myTopPosition: getElementTop(this.siteNavigation),
    });

    document.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollEvent);
  }

  render() {
    return (
        <SiteNavigation isAtScreenTop={this.state._isAtScreenTop}
                        innerRef={el => this.siteNavigation = el}>
          <H2><FormattedMessage id='portfolio.nav.header' defaultMessage='Site navigation'/></H2>
          <NavigationItems/>
        </SiteNavigation>
    );
  }
}

export default SiteNavigationBar;
