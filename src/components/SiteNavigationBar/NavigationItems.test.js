import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { mountWithIntl } from '../../helpers/intl-enzyme-test-helper';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import NavigationItems from './NavigationItems';
import routes from '../../routes';

describe('NavigationItems', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithIntl(
        <Router>
          <NavigationItems/>
        </Router>
    );
  });

  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<NavigationItems/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should have a `Link` component for each route in the correct sequence', () => {
    routes.forEach((route, idx) => {
      expect(
          wrapper
              .find(Link)
              .at(idx)
              .prop('to')
      ).toBe(route.path);
    });
  });
});