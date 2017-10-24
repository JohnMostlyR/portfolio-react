import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import {FormattedMessage, injectIntl} from 'react-intl';

import ExternalLink from './ExternalLink';
import Aside from './Aside';
import Header from './Header';
import StyledUL from './StyledUL';
import StyledLI from './StyledLI';

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
        icon: 'free-code-camp',
        name: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/mensae',
      },
      {
        icon: 'github',
        name: 'GitHub',
        url: 'https://github.com/Mensae',
      },
      {
        icon: 'linkedin-square',
        name: 'LinkedIn',
        url: 'https://nl.linkedin.com/in/jmeester',
      },
      {
        icon: 'codepen',
        name: 'Codepen',
        url: 'https://codepen.io/jmeester',
      },
    ];

    return (
        <Aside>
          <Header><FormattedMessage id='portfolio.social_links.header' defaultMessage='Also find me on:' /></Header>
          <StyledUL innerRef={e => this.list = e}>
            {
              externalLinks.map((externalLink, idx) => (
                  <StyledLI key={idx} data-tip={externalLink.name}>
                    <ExternalLink href={externalLink.url} faIcon={externalLink.icon} description={externalLink.name}/>
                  </StyledLI>
              ))
            }
          </StyledUL>
          <ReactTooltip />
        </Aside>
    );
  }
}

export default injectIntl(SocialLinks);
