import React from 'react';
import styled from 'styled-components';
import Media from '../MediaObject/Media';
import typography from '../../helpers/styles/templates/typography';

import MyLogo from '../../images/my-logo.svg';

const BrandWrapper = styled.div`
  float: left;
  padding: 1vh 0 0 1vw;
`;

const BrandLink = styled.a.attrs({
  href: props => props.href || '#',
})`
  display: inline-block;
  width: 45px;
  color: #fff;
  text-decoration: none;
  
  ${typography.minion}
`;

const Brand = (props) => (
  <BrandWrapper>
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
  </BrandWrapper>
);

export default Brand;
