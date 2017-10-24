import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import StyledSection from './index';

describe('StyledSection', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<StyledSection/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});