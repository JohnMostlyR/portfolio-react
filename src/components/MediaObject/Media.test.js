import React from 'react';
import {shallow} from 'enzyme';

import Media from './index';
import MediaImage from './MediaImage';
import MediaBody from './MediaBody';

describe('Media', () => {
  const IMAGE_SOURCE = '/test.png';
  const IMAGE_ALT = 'test';

  let wrapper;
  let mediaImageProps = {};
  let mediaBodyProps = {};

  beforeEach(() => {
    wrapper = shallow(<Media imageAlt={IMAGE_ALT} imageSource={IMAGE_SOURCE}/>);
  });

  it('should render and match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an MediaImage component', () => {
    const mediaImage = wrapper.find(MediaImage);
    expect(mediaImage).toHaveLength(1);
  });

  it('that should receive the required props', () => {
    const mediaImage = wrapper.find(MediaImage);
    mediaImageProps = mediaImage.props();
    expect(mediaImage.prop('imageSource')).toBe(IMAGE_SOURCE);
    expect(mediaImage.prop('imageAlt')).toBe(IMAGE_ALT);
  });

  it('and receive the optional props', () => {
    const optionalProps = {
      imageAlign: 'bottom',
      imageHeight: '50px',
      imageLink: 'https://to-somewhere.go/',
      imageWidth: '50px',
      reverse: true,
      spacing: '10px',
    };

    wrapper.setProps(optionalProps);

    const updatedProps = wrapper.find(MediaImage).props();

    Object.keys(optionalProps).forEach((prop) => {
      expect(updatedProps[prop]).not.toBe(mediaImageProps[prop]);
    });
  });

  it('should have an MediaBody component', () => {
    const mediaBody = wrapper.find(MediaBody);
    expect(mediaBody).toHaveLength(1);
    mediaBodyProps = mediaBody.props();
  });

  it('that should receive props', () => {
    const newProps = {
      bodyAlign: 'bottom',
      reverse: true,
    };
    wrapper.setProps(newProps);
    const updatedProps = wrapper.find(MediaBody).props();
    Object.keys(newProps).forEach(prop => {
      expect(updatedProps[prop]).not.toBe(mediaBodyProps[prop]);
    });
  });
});