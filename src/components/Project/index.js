import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import mq from '../../styles/templates/mediaQueries';
import typography from '../../styles/templates/typography';
import MediaAsset from '../MediaAsset';

import ProjectLinksList from './ProjectLinksList';

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectBody = styled.div`
  flex: 1 0 50%;
  order: 2;
  padding-bottom: 2vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 3vw;
  
  ${mq.m`
    order: 1;
    padding-bottom: 1vw;
    padding-left: 3vw;
    padding-top: 1vw;
  `}
`;

const ProjectHeader = styled.div`
  display: flex;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  flex: 1;
  font-family: Consolas, Monaco, "Andale Mono", monospace !important;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  
  ${typography.doublePica}
`;

const ProjectDetailsTitle = styled.p`
  margin-top: .25em;
  ${typography.pica}
`;

const ProjectDetailsBody = styled.p`
  min-width: 32vw;
  margin-top: .5em;
  ${typography.bodyCopy};
`;

const Project = (props) => (
    <Article>
      <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd}/>
      <ProjectBody>
        <div>
          <ProjectHeader>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectLinksList links={props.links}/>
          </ProjectHeader>
          <ProjectDetailsTitle><strong>{props.detailsTitle}</strong></ProjectDetailsTitle>
        </div>
        <ProjectDetailsBody>{props.detailsBodyText}</ProjectDetailsBody>
      </ProjectBody>
      <ReactTooltip />
    </Article>
);

Project.propTypes = {
  detailsTitle: PropTypes.string,
  detailsBodyText: PropTypes.string,
  isOdd: PropTypes.bool,
  links: PropTypes.array,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
};

Project.defaultProps = {
  title: 'New Project',
};

export default Project;
