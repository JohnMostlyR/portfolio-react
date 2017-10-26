import React from 'react';
import renderer from 'react-test-renderer'

import ResponsiveImage from './index';

describe('ResponsiveImage', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<ResponsiveImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});