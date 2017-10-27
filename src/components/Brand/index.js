import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {rem} from 'polished';

import Media from '../MediaObject/index';

import MyLogo from '../../images/my-logo.svg';
import typography from '../../styles/templates/typography';

const Wrapper = styled.div`
  float: left;
  padding: 1vh 0 0 1vw;
`;

export const BrandLink = styled.a.attrs({
  href: props => props.href || '#',
})`
  display: inline-block;
  width: ${rem('45px')};
  color: #fff;
  text-decoration: none;
  
  ${typography.minion}
`;

const Brand = ({href, imageSource, text}) => (
  <Wrapper>
    <BrandLink href={href}>
      <Media
        bodyAlign='middle'
        imageSource={imageSource}
        imageAlt='logo'
        imageAlign='middle'
        imageHeight='45px'
        imageWidth='45px'
      >{text}</Media>
    </BrandLink>
  </Wrapper>
);

Brand.propTypes = {
  href: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};

Brand.defaultProps = {
  href: '/',
  imageSource: MyLogo,
  text: 'JOHAN MEESTER',
};

export default Brand;
