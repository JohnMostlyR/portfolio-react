import React from 'react';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';

import ListItem from './ListItem';
import Link from './Link';

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.m`justify-content: flex-start;`}
`;

const pages = [
  {
    description: 'Home',
    icon: 'fa fa-home fa-fw',
    navigateTo: 'home',
  },
  {
    description: 'About',
    icon: 'fa fa-address-card fa-fw',
    navigateTo: 'about',
  },
  {
    description: 'Skills',
    icon: 'fa fa-code fa-fw',
    navigateTo: 'skills',
  },
  {
    description: 'Projects',
    icon: 'fa fa-list fa-fw',
    navigateTo: 'projects',
  },
  {
    description: 'Contact',
    icon: 'fa fa-send fa-fw',
    navigateTo: 'contact',
  },
];

const List = (props) => (
  <UL>
    {
      pages.map((page, idx) => (
          <ListItem key={idx}>
            <Link to={`/${page.navigateTo}`} iconClassName={page.icon}
                  description={page.description}/>
          </ListItem>
        ),
      )
    }
  </UL>
);

export default List;

