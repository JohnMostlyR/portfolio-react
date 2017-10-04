import React, {Component} from 'react';
import Snap from 'snapsvg';
import styled from 'styled-components';
import InvisibleH2 from '../components/InvisibleH2';
import mq from '../styles/templates/mediaQueries';
import {svgToURL} from '../styles/tools';

import MyPicture from '../images/itsme-trevi-rome.jpg';

const IntroPageSection = styled.header`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-attachment: fixed;
  background-image: url(${svgToURL('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.5 196.3" preserveAspectRatio="xMaxYMid"><path fill="#AEE8FC" d="M41.88 103.97h16.64L50.2 89.55l-8.32-14.41-8.33 14.41-8.32 14.42z"/><path fill="#54D2FE" d="M11.44 56.67h11.44l-5.72-9.91-5.72-9.91-5.72 9.91L0 56.67z"/><path fill="#C9F0C4" d="M42.98 49.07h8.91l-4.46-7.72-4.45-7.71-4.45 7.71-4.46 7.72z"/><path fill="#D3EE32" d="M31.2 11.77h6.79l-3.4-5.88L31.2 0l-3.4 5.89-3.4 5.88z"/><path fill="#5DD2F9" d="M47.83 153.64H59.5l-5.83-10.11-5.84-10.11L42 143.53l-5.84 10.11z"/><path fill="#C8F1FD" d="M33.72 196.3h4.63l-2.32-4.02-2.31-4.01-2.32 4.01-2.32 4.02z"/></svg>')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 50%;

  ${mq.m`padding-right: 10vw; // Keep room for site navigation`}

  @media (min-height: 424px) {
    align-items: center;
  }
`;

const IntroHeader = styled.header`
  height: 100%;
  width: 100vmin;
  z-index: 9;
`;

const SpeechBubble = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

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
      <IntroPageSection id="intro" isIntro={true}>
        <IntroHeader>
          <InvisibleH2>INTRO</InvisibleH2>
          <SpeechBubble innerRef={d => this.svgDiv = d}>
            <svg id="js-svg-intro-balloon" width="100%" height="100%" viewBox="0 365.1 595.3 425.3"
                 preserveAspectRatio="xMinYMid">
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
          </SpeechBubble>
        </IntroHeader>
      </IntroPageSection>
    );
  }
}

export default IntroPage;
