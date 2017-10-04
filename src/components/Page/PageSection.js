import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

const PageSection = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  
  ${mq.m`padding-right: 10vw; // Keep room for site navigation`}
  
  @media (min-width: 1920px) {
    padding: 0 17vw;
  }
`;

export default PageSection;
