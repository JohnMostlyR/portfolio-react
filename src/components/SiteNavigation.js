import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {throttle} from 'lodash';
import 'scrolling-element';

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
    const myTopPosition = this._getElementTop(this.refs.siteNavigation);
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
            top: (this.state.myTopPosition + this.state.topPositionOffset),
            width: '100%',
            zIndex: 10,
          }
        );
      } else {
        return ({});
      }
    };

    return (
      <nav style={setStyle()} className="c-portfolio-site-nav" ref='siteNavigation'>
        <ul className="c-portfolio-site-nav__items">
          {
            pages.map((page, idx) => {
              return (
                <li
                  className="c-portfolio-site-nav__item"
                  key={idx}
                >
                  <NavLink
                    to={`/${page.navigateTo}`}
                    activeClassName='is-active'
                    className='c-portfolio-site-nav__link'
                  ><span
                    className={`${page.icon} c-portfolio-site-nav__icon`}
                    aria-hidden="true"/><span><span
                    className="c-portfolio-site-nav__description">{page.description}</span></span>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}

export default SiteNavigation;
