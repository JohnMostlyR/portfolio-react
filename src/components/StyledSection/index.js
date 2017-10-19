import styled from 'styled-components';
import {rem} from 'polished';
import mq from '../../styles/templates/mediaQueries';

const StyledSection = styled.section`
  align-self: center;
  height: 100%;
  padding-right: 0;
  
  ${mq.m`
    padding-right: ${rem('114px')}; // Keep room for site navigation
  `}
  
  @media (min-width: ${rem('1920px')}) {
    padding: 0 17vw;
  }
`;

export default StyledSection;