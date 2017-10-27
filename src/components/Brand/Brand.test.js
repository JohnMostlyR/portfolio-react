import React from 'react';
import {shallow} from 'enzyme';

import Brand, {BrandLink} from './index';

import Media from '../MediaObject/index';

describe('Brand', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Brand/>);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a `BrandLink` component', () => {
    expect(wrapper.find(BrandLink)).toHaveLength(1);
  });

  it('that should have a default `href` property', () => {
    expect(wrapper.find(BrandLink).prop('href')).toBe('/');
  });

  it('that should receive the `href` property', () => {
    const link = `/${Date.now()}`;
    wrapper.setProps({href: link});
    expect(wrapper.find(BrandLink).prop('href')).toBe(link);
  });

  it('should have a `Media` component', () => {
    expect(wrapper.find(Media)).toHaveLength(1);
  });

  it('that should have a default `imageSource` property', () => {
    expect(wrapper.find(Media).prop('imageSource')).toBeTruthy();
  });

  it('that should receive the `imageSource` property', () => {
    const imageSource = `/${Date.now()}.png`;
    wrapper.setProps({imageSource});
    expect(wrapper.find(Media).prop('imageSource')).toBe(imageSource);
  });

  it('that should have a default `text` property', () => {
    expect(wrapper.find(Media).children()).toHaveLength(1);
  });

  it('that should receive the `text` property', () => {
    const text = Date.now().toString();
    wrapper.setProps({text});
    expect(wrapper.find(Media).childAt(0).text()).toBe(text);
  });
});