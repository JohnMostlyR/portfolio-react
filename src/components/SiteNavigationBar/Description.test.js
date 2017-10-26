import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Description from './Description';

describe('Description', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Description/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});