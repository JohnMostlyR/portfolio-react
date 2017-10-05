import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Main from './components/Main';
import SiteHeader from './components/SiteHeader/index';
import IntroPage from './pages/index';
import AboutPage from './pages/about';
import SkillsPage from './pages/skills';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <SiteHeader/>
        <Main>
          <Route path='/intro' component={IntroPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/skills' component={SkillsPage}/>
          <Route path='/projects' component={ProjectsPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route exact path='/' render={() => (
            <Redirect to='/intro'/>
          )}/>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
