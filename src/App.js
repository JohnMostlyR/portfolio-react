import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import Grid from './components/Grid';
import SiteHeader from './components/SiteHeader/SiteHeader';
import IntroPage from './pages/IntroPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  padding: 1vh 0;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Grid>
        <SiteHeader/>
        <StyledMain>
          <Route path='/intro' component={IntroPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/skills' component={SkillsPage}/>
          <Route path='/projects' component={ProjectsPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route exact path='/' render={() => (
            <Redirect to='/intro'/>
          )}/>
        </StyledMain>
        <ReactTooltip />
      </Grid>
    );
  }
}

export default App;
