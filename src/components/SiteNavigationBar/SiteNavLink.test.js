import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { mount } from 'enzyme';

import SiteNavLink from './SiteNavLink';

describe('SiteNavLink', () => {
  const TO = '/test';
  const context = {
    router: {
      route: {
        location: {
          pathname: '/other',
        }
      }
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
        <Router>
          <SiteNavLink to={TO} data-isactive={context.router.route.location.pathname === TO}/>
        </Router>
    );
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Router><SiteNavLink to={'/'} data-isactive={'/'}/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should have a `Link` component', () => {
    expect(
        wrapper.find(Link)
    ).toHaveLength(1);
  });

  it('Should have an <a> where the href prop. matches the Link\'s to prop', () => {
    expect(
        wrapper.find(`a[href="${TO}"]`)
    ).toHaveLength(1);
  });

  it('Should have an <a> with a data-isactive prop. that is false when then browser' +
      ' location does not match the Link\'s to prop', () => {
    expect(
        wrapper.find(`a[href="${TO}"]`).prop('data-isactive')
    ).toBe(false);
  });
});