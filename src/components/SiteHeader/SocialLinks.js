import React, {Component} from 'react';
import styled from 'styled-components';
import typography from '../../styles/templates/typography';
import {visuallyHidden} from '../../styles/mixins';

const SocialLinksAside = styled.aside`
  float: right;
  padding: 0 1em 0 4em;
  background-image: linear-gradient(45deg, transparent 23%, #fff 23%);
  color: #575756;
`;

const SocialLinksH2 = styled.h2`${visuallyHidden}`;

const SocialLinksList = styled.ul`
  display: flex;
  list-style: none;
`;

const SocialLinksListItem = styled.li`
  padding: .5em;
  transition: transform .2s;

  &:hover {
    transform: scale(1.5);
  }

  ${typography.doublePica}
  
  @media (min-width: 37.5em) and (max-height: 31.25em) {
    ${typography.pica}
  }
`;

const SocialLinksLink = styled.a`
  color: #575756;
  text-decoration: none;
`;

const VisuallyHiddenSpan = styled.span`
  ${visuallyHidden}
`;

class SocialLinks extends Component {
  playAnimation = (links) => {
    const INDEX = 0; // starting node index
    const START_DELAY = 3000; // milliseconds;
    const DELAY = 200; // milliseconds;

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
      <SocialLinksAside>
        <SocialLinksH2>Find me on:</SocialLinksH2>
        <SocialLinksList innerRef={e => this.list = e}>
          {
            externalLinks.map((externalLink, idx) => (
              <SocialLinksListItem key={idx} data-tip={externalLink.name}>
                <SocialLinksLink href={externalLink.url} target="_blank"
                   rel="noopener noreferrer">
                  <span className={externalLink.icon} aria-hidden="true"/><VisuallyHiddenSpan>{externalLink.name}</VisuallyHiddenSpan>
                </SocialLinksLink>
              </SocialLinksListItem>
            ))
          }
        </SocialLinksList>
      </SocialLinksAside>
    );
  }
}

export default SocialLinks;
