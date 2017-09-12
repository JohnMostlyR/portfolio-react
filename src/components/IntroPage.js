import React, {Component} from 'react';
import Snap from 'snapsvg';

import MyPicture from '../images/itsme-trevi-rome.jpg';

class IntroPage extends Component {
  animateSvg = () => {
    const SVG_EL = Snap(this.svgDiv);
    const TIMING = window.mina;
    const ANIMATION_DURATION = 200; // milliseconds
    const ANIMATION_DELAY = 200; // milliseconds

    const INFOPAGE_BALLOON_ANIMATION_TIMELINE = [
      {
        elementId: 'p1',
        animationAttributes: {
          d: 'M0 439.8v140.3l78.7 153.1H159L0 439.8',
        },
        animationDuration: ANIMATION_DURATION / 2,
        animationDelay: 1,
        animationTimingFunction: TIMING.linear,
        dFrom: 'M0 439.8v140.3l1 2h76.1z',
        dTo: '',
      },
      {
        elementId: 'p2',
        animationAttributes: {
          d: 'M128.3 790.4l30.7-57.2H78.7l-26.2 57.2z',
        },
        animationDelay: ANIMATION_DELAY / 2,
        animationDuration: ANIMATION_DURATION / 2,
        animationTimingFunction: TIMING.linear,
        dFrom: 'M159,733.2 v0 H78.700002 78.7z',
        dTo: '',
      },
      {
        elementId: 'p3',
        animationAttributes: {
          d: 'M5.3 702.1l47.2 88.3h75.8l-49.1-88.3z',
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.linear,
        dFrom: 'M52.5,790.4 v0 h75.8 v0z',
        dTo: '',
      },
      {
        elementId: 'p4',
        animationAttributes: {
          d: 'M5.3 702.1l180.1-335.9h70.2L79.2 702.1z',
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.linear,
        dFrom: 'M5.3,702.1 v0 h73.9 v0z',
        dTo: '',
      },
      {
        elementId: 'p5',
        animationAttributes: {
          d: 'M595.3 373.2c0-4.4-3.6-8.1-8.1-8.1H185.91L40.836 635.841 587.3 635.8c4.4 0 8.1-3.6 8.1-8.1V373.2z',
          opacity: 1,
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.linear,
        dFrom: 'M185.91 365.1L0 0l-145.073 270.741z',
        dTo: '',
      },
      {
        elementId: 'g2',
        animationAttributes: {
          opacity: 1,
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.linear,
      },
      {
        elementId: 't3',
        animationAttributes: {
          opacity: 1,
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: 1,
        animationTimingFunction: TIMING.linear,
      },
      {
        elementId: 't3',
        animationAttributes: {
          'font-size': '40px',
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.linear,
      },
      {
        elementId: 't3',
        animationAttributes: {
          'font-size': '20px',
        },
        animationDelay: ANIMATION_DELAY,
        animationDuration: ANIMATION_DURATION,
        animationTimingFunction: TIMING.bounce,
      },
    ];

    const START_FRAME = 0; // 0 is the first frame

    let animationTimer = setTimeout(
      function animate(_timeline, currentFrameIndex) {
        const currentFrame = _timeline[currentFrameIndex];
        const element = SVG_EL.select(`#${currentFrame.elementId}`);
        element.animate(
          currentFrame.animationAttributes,
          currentFrame.animationDuration,
          currentFrame.animationTimingFunction
        );

        if (currentFrameIndex < INFOPAGE_BALLOON_ANIMATION_TIMELINE.length - 1) {
          animationTimer = setTimeout(
            animate,
            _timeline[currentFrameIndex + 1].animationDelay,
            INFOPAGE_BALLOON_ANIMATION_TIMELINE,
            (currentFrameIndex += 1)
          );
        } else {
          clearTimeout(animationTimer);
        }
      },
      INFOPAGE_BALLOON_ANIMATION_TIMELINE[START_FRAME].animationDelay,
      INFOPAGE_BALLOON_ANIMATION_TIMELINE,
      START_FRAME
    );
  };

  componentDidMount() {
    this.animateSvg();
  }

  componentDidUpdate() {
    this.animateSvg();
  }

  render() {
    return (
      <section id="intro" className="c-portfolio-grid__section c-portfolio-intro" data-intro={true}>
        <header className="c-portfolio-intro__header">
          <h2 className="u-visually-hidden">INTRO</h2>
          <div className="l-portfolio-intro__text-balloon" ref={d=>this.svgDiv=d}>
            <svg id="js-svg-intro-balloon" width="100%" height="100%" viewBox="0 365.1 595.3 425.3" preserveAspectRatio="xMinYMid">
              <g id="g1">
                <path id="p1" fill="#212120" d="M-754.1,133.2v140.3l78.7,153.1h80.3L-754.1,133.2z"/>
                <path id="p2" fill="#818180" d="M159,733.2 v0 H78.700002 78.7z"/>
                <path id="p3" fill="#414140" d="M52.5,790.4 v0 h75.8 v0z"/>
                <path id="p4" fill="#818180" d="M5.3,702.1 v0 h73.9 v0z"/>
                <path id="p5" fill="#575756" d="M-31.8,309.6c0-4.4-3.6-8.1-8.1-8.1h-401.2l-145.1,270.6h546.3
		c4.4,0,8.1-3.6,8.1-8.1V309.6L-31.8,309.6z" style={{'opacity': 0}}/>
              </g>
              <path d="M172 440h387.2v141.4h-387z" fill="none"/>
              <text fill="#575756" fontSize="65.685" x="176" y="500">WELCOME</text>
              <text fill="#95C11F" fontSize="65.685" x="172" y="496">WELCOME</text>
              <g id="g2" style={{'opacity': 0}}>
                <text id="t2" fill="#FFF" fontSize="47" textAnchor="end" x="555" y="545">I’m Johan Meester</text>
                <defs>
                  <mask id="m1">
                    <circle cx="553" cy="407" fill="#fff" r="32.5"/>
                  </mask>
                </defs>
                <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={MyPicture} preserveAspectRatio="none"
                       x="520" y="374" width="65" height="65" mask="url('#m1')"/>
              </g>
              <text id="t3" style={{'fontSize': '20px', 'textAnchor': 'end', 'opacity': 0}} fill="#FFF" x="555"
                    y="580">FRONT-END DEVELOPER
              </text>
            </svg>
          </div>
        </header>
      </section>
    );
  }
}

export default IntroPage;
