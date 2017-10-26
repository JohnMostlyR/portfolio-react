import React from 'react';
import renderer from 'react-test-renderer'

import PageHeader from './index';

describe('PageHeader', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<PageHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});