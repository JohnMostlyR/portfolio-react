import React from 'react';
import {shallow} from 'enzyme';

import MediaAsset, {Figure, ImageWrapper} from './index';

describe('MediaAsset', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MediaAsset/>);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Figure component', () => {
    expect(wrapper.find(Figure)).toHaveLength(1);
  });

  it('that should receive an idOdd prop', () => {
    expect(wrapper.find(Figure).prop('isOdd')).toBeFalsy();
    wrapper.setProps({ isOdd: true, });
    expect(wrapper.find(Figure).prop('isOdd')).toBe(true);
  });

  it('should have a ImageWrapper component', () => {
    expect(wrapper.find(ImageWrapper)).toHaveLength(1);
  });

  it('that should receive an imageSource prop', () => {
    const myImage = `${Date.now()}.png`;
    wrapper.setProps({ imageSource: myImage, });
    expect(wrapper.find(ImageWrapper).prop('imageSource')).toBe(myImage);
  });
});