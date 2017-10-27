import React from 'react';
import {shallow} from 'enzyme';

import Project from './index';

describe('Project', () => {
  const links = [
    {
      name: 'github',
      url: 'https://github.com/',
      faIcon: 'github',
    },
    {
      name: 'codepen',
      url: 'https://codepen.io/',
      faIcon: 'codepen',
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project links={links}/>);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});