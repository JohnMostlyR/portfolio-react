import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Bubble from './Bubble';

describe('Bubble', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Bubble/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});