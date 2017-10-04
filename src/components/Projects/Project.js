import React from 'react';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import typography from '../../styles/templates/typography';
import ProjectExternalLink from './ProjectExternalLink';
import MediaAsset from '../../components/MediaAsset';

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Body = styled.div`
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

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.h2`
  flex: 1;
  font-family: Consolas, Monaco, "Andale Mono", monospace !important;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  
  ${typography.doublePica}
`;

const ProjectLinkslist  = styled.ul`
  height: 1.5em;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`;

const DetailsTitle = styled.p`
  margin-top: .25em;
  ${typography.pica}
`;

const DetailsBodyText = styled.p`
  min-width: 32vw;
  margin-top: .5em;
`;

const Project = (props) => {
  return (
    <Article>
      <MediaAsset imageSource={props.thumbnailUrl} isOdd={props.isOdd}/>
      <Body>
        <div>
          <TitleWrapper>
            <Title>{props.title}</Title>
            <ProjectLinkslist>
              {
                props.links.map(link => <ProjectExternalLink key={link.name} link={link}/>)
              }
            </ProjectLinkslist>
          </TitleWrapper>
          <DetailsTitle><strong>{props.detailsTitle}</strong></DetailsTitle>
        </div>
        <DetailsBodyText>{props.detailsBodyText}</DetailsBodyText>
      </Body>
    </Article>
  );
};

export default Project;
