import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {shallow} from 'enzyme';
import SpeechBubble from './index';

describe('SpeechBubble', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <SpeechBubble/>,
    );
  });

  it('Should render and match the snapshot', () => {
    const tree = renderer.create(<SpeechBubble/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});