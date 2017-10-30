import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import createRouterContext from 'react-router-test-context';

import SiteNavigationBar from '../index';
import getElementTop from '../../../utils/getElementTop';

jest.mock('../../../utils/getElementTop');

describe('SiteNavigationBar', () => {
  const routerContext = createRouterContext();
  const setSiteNavIsFixedOffset = jest.fn();

  it('should render and match the snapshot', () => {
    const wrapper = mount(
        <SiteNavigationBar setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}
                           siteNavIsAtScreenTop={false}/>,
        {context: routerContext},
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should get its own top position on the screen', () => {
    const wrapper = mount(
        <SiteNavigationBar setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}
                           siteNavIsAtScreenTop={false}/>,
        {context: routerContext},
    );

    const invocationArgs = getElementTop.mock.calls[0];
    expect(invocationArgs[0].nodeType).toBe(1);
    wrapper.unmount();
  });

  it('should call setSiteNavIsFixedOffset', () => {
    const wrapper = mount(
        <SiteNavigationBar setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}
                           siteNavIsAtScreenTop={false}/>,
        {context: routerContext},
    );

    const invocationArgs = setSiteNavIsFixedOffset.mock.calls[0];
    expect(invocationArgs[0]).toHaveProperty('siteNavigationTopPosition');
    expect(invocationArgs[0]).toHaveProperty('siteNavigationOffsetHeight');
    wrapper.unmount();
  });

  it('should act when top of the screen is reached', () => {
    const wrapper = mount(
        <SiteNavigationBar setSiteNavIsFixedOffset={setSiteNavIsFixedOffset}
                           siteNavIsAtScreenTop={true}/>,
        {context: routerContext},
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});