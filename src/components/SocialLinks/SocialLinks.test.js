import React from 'react';
import ReactTooltip from 'react-tooltip';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { mountWithIntl } from '../../helpers/intl-enzyme-test-helper';

import SocialLinks from './index';
import Aside from './Aside';
import Header from './Header';
import StyledUL from './StyledUL';
import StyledLI from './StyledLI';

describe('SocialLinks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithIntl(
        <SocialLinks/>
    );

    // console.log(wrapper.debug());
  });

  it('should have an `Aside` component', () => {
    expect(wrapper.find(Aside)).toHaveLength(1);
  });

  it('should have an `Header` component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should have an `StyledUL` component', () => {
    expect(wrapper.find(StyledUL)).toHaveLength(1);
  });

  it('should have four `StyledLI` components', () => {
    expect(wrapper.find(StyledLI)).toHaveLength(4);
  });

  it('each `StyledLI` component should have a data-tip property', () => {
    wrapper.find(StyledLI).forEach((node) => {
      expect(node.prop('data-tip')).toBeTruthy();
    })
  });

  it('should have a `ReactTooltip` component', () => {
    expect(wrapper.find(ReactTooltip)).toHaveLength(1);
  });

  it('Should render and match the snapshot', () => {
    const wrapper = shallow(<SocialLinks/>);
    expect(wrapper).toMatchSnapshot();
  });
});