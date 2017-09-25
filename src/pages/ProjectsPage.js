import React from 'react';
import Page from '../components/Page/Page';
import Projects from '../components/Projects/Projects';
import styled from 'styled-components';
import mq from '../helpers/styles/templates/mediaQueries';

const ProjectsWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
`;

const Col = styled.div`
  ${mq.m`flex: 1 0 10vw;`}
`;

class ProjectsPage extends React.Component {
  render() {
    return (
      <Page pageTitle="MY PROJECTS">
        <ProjectsWrapper>
          <Col/>
          <Projects/>
        </ProjectsWrapper>
      </Page>
    );
  }
}

export default ProjectsPage;
