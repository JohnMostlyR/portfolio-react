import styled from 'styled-components';
import {rem} from 'polished';

import mq from '../../styles/templates/mediaQueries';

const SiteNavigation = styled.nav`
  width: 100%;
  padding: .35rem 0;
  position: ${props => props.isAtScreenTop ? 'fixed' : 'unset'};
  top: 0;
  background-color: #575756;

  ${mq.m`
    left: 100%;
    position: ${props => props.isAtScreenTop ? 'fixed' : 'absolute'};
    top: ${props => props.isAtScreenTop ? 0 : rem('77px')};
    width: unset;
    padding: 0 .35rem;
    transform: rotate(90deg);
    transform-origin: top left;
    background-color: transparent;
    border-bottom: none;  
  `}
`;

export default SiteNavigation;
