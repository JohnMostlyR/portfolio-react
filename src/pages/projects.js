import React from 'react';
import Layout from '../Layouts';
import Projects from '../components/Projects/index';
import styled from 'styled-components';
import mq from '../styles/templates/mediaQueries';

const ProjectsWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  width: 100%;
`;

const Col = styled.div`
  ${mq.m`flex: 1 0 10vw;`}
  
  @media (min-width: 1920px) {
    display: none;
  }
`;

class ProjectsPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="MY PROJECTS">
        <ProjectsWrapper>
          <Col/>
          <Projects/>
        </ProjectsWrapper>
      </Layout>
    );
  }
}

export default ProjectsPage;
