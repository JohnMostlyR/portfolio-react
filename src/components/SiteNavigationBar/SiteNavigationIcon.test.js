import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SiteNavigationIcon from './SiteNavigationIcon';

describe('SiteNavigationIcon', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<SiteNavigationIcon name={'home'} fixedWidth/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});