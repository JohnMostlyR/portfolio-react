import React from 'react';
import 'jest-styled-components';
import {shallow} from 'enzyme';
import createRouterContext from 'react-router-test-context';

import SiteHeader from './index';

describe('SiteHeader', () => {
  const context = createRouterContext();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <SiteHeader setSiteNavIsFixedOffset={(offset) => offset}/>,
        {context}
    );
  });


  it('Should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});