import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import StyledLI from './StyledLI';

describe('StyledLI', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledLI/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});