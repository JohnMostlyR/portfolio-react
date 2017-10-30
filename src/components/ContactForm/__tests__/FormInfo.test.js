import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import FormInfo from '../FormInfo';

describe('FormInfo', () => {
  it('should render and match the snapshot', () => {
    const wrapper = shallow(<FormInfo/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});