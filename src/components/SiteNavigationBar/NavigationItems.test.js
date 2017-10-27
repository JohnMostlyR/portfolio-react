import React from 'react';
import { shallow } from 'enzyme';
import createRouterContext from 'react-router-test-context';

import NavigationItems from './NavigationItems';
import SiteNavLink from './SiteNavLink';
import routes from '../../routes';

describe('NavigationItems', () => {
  const routerContext = createRouterContext();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <NavigationItems/>,
        { context: routerContext },
    );
  });

  it('Should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a `SiteNavLink` component for each route in the correct sequence', () => {
    routes.forEach((route, idx) => {
      expect(
          wrapper
              .find(SiteNavLink)
              .at(idx)
              .prop('to')
      ).toBe(route.path);
    });
  });
});