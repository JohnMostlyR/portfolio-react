import React, {Component} from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import List from './List';
import ListItem from './ListItem';
import Link from './Link';
import Header from './Header';

const Aside = styled.aside`
  float: right;
  padding: 0 1em 0 4em;
  background-image: linear-gradient(45deg, transparent 23%, #fff 23%);
  color: #575756;
`;

class SocialLinks extends Component {
  playAnimation = (links) => {
    const INDEX = 0; // starting node index
    const START_DELAY = 3000; // milliseconds;
    const DELAY = 100; // milliseconds;

    setTimeout(function a(nodes, idx) {
      nodes[idx].style.transform = 'scale(1.5)';

      setTimeout(() => {
        nodes[idx].style.removeProperty('transform');
        if (idx < nodes.length - 1) {
          setTimeout(a, DELAY, nodes, idx += 1);
        } else {
          return true;
        }
      }, DELAY);
    }, START_DELAY, links, INDEX);
  };

  componentDidMount() {
    if (this.list.children.length) {
      this.playAnimation(this.list.children);
    }
  }

  render() {
    const externalLinks = [
      {
        icon: 'fa fa-free-code-camp',
        name: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/mensae',
      },
      {
        icon: 'fa fa-github',
        name: 'Github',
        url: 'https://github.com/Mensae',
      },
      {
        icon: 'fa fa-linkedin-square',
        name: 'LinkedIn',
        url: 'https://nl.linkedin.com/in/jmeester',
      },
      {
        icon: 'fa fa-codepen',
        name: 'Codepen',
        url: 'https://codepen.io/jmeester',
      },
    ];

    return (
      <Aside>
        <Header>Find me on:</Header>
        <List innerRef={e => this.list = e}>
          {
            externalLinks.map((externalLink, idx) => (
              <ListItem key={idx} data-tip={externalLink.name}>
                <Link href={externalLink.url} iconClass={externalLink.icon} description={externalLink.name}/>
              </ListItem>
            ))
          }
        </List>
        <ReactTooltip />
      </Aside>
    );
  }
}

export default SocialLinks;
