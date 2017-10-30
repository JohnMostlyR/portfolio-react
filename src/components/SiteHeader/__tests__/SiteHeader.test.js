import React from 'react';
import 'jest-styled-components';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';

import SiteHeader from '../index';

describe('SiteHeader', () => {
  it('should render and match the snapshot', () => {
    const setSiteNavIsFixedOffset = jest.fn();
    const routerContext = createRouterContext();
    const wrapper = shallow(
        <SiteHeader setSiteNavIsFixedOffset={setSiteNavIsFixedOffset} siteNavIsAtScreenTop={false}/>,
        {context: routerContext},
    );

    // TODO Implement!
    // expect(toJson(wrapper)).toMatchSnapshot();
  });
});