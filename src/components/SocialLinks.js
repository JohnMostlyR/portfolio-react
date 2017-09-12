import React, {Component} from 'react';

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
    if (this.refs.items.children.length) {
      this.playAnimation(this.refs.items.children);
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
      <aside className="c-portfolio-global-header__social">
        <h2 className="u-visually-hidden">Find me on:</h2>
        <ul className="c-portfolio-social__items" ref='items'>
          {
            externalLinks.map((externalLink, idx) => (
              <li className="c-portfolio-social__item" key={idx}>
                <a className="c-portfolio-social__lnk" href={externalLink.url} target="_blank"
                   rel="noopener noreferrer">
                  <span className={externalLink.icon} aria-hidden="true"/><span
                  className="u-visually-hidden">{externalLink.name}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default SocialLinks;
