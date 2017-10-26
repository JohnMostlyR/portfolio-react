import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import 'jest-styled-components';
import {shallow} from 'enzyme';
import createRouterContext from 'react-router-test-context';
import {mountWithIntl} from '../../helpers/intl-enzyme-test-helper';
import {MemoryRouter} from 'react-router-dom';
import createComponentWithIntl from '../../utils/createComponentWithIntl';

// this import is created by our mock, it is intended to help with testing and
// don't exist in the real package
import {intl} from 'react-intl';

import SiteNavigationBar from './index';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('SiteNavigationBar', () => {
  const context = createRouterContext();
  const setSiteNavIsFixedOffset = (offset) => (offset);

  it('should render correctly and match the snapshot', () => {
    //TODO
  });

  it('should set the state property `_myTopPosition` with the current, real, top-position on the' +
      ' screen on componentDidMount', () => {
    //TODO need to find out first on how to get the state when the component is wrapped with
    // -intl- and -router-
  });

  it('should unsubscribe from listening to scroll events on componentWillUnmount', () => {
    //TODO
  });

  it('should execute the passed setSiteNavIsFixedOffset function when the top of the screen is' +
      ' reached with the offset as argument', () => {
    //TODO
  });
});