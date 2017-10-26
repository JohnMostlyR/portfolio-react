import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SiteNavigation from './SiteNavigation';

describe('SiteNavigation', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<SiteNavigation/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});