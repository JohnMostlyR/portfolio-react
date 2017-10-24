import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Aside from './Aside';

describe('Aside', () => {
  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<Aside/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});