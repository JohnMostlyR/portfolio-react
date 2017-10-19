import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';

import Media from '../MediaObject/index';

import MyLogo from '../../images/my-logo.svg';
import typography from '../../styles/templates/typography';

const Wrapper = styled.div`
  float: left;
  padding: 1vh 0 0 1vw;
`;

const BrandLink = styled.a.attrs({
  href: props => props.href || '#',
})`
  display: inline-block;
  width: ${rem('45px')};
  color: #fff;
  text-decoration: none;
  
  ${typography.minion}
`;

const Brand = (props) => (
  <Wrapper>
    <BrandLink href={'/intro'}>
      <Media
        bodyAlign='middle'
        imageSource={MyLogo}
        imageAlt='logo'
        imageAlign='middle'
        imageHeight='45px'
        imageWidth='45px'
      >JOHAN MEESTER</Media>
    </BrandLink>
  </Wrapper>
);

export default Brand;
