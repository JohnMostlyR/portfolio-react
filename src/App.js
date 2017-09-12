import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import IntroPage from './components/IntroPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="c-portfolio-grid">
        <SiteHeader/>
        <main className="c-portfolio-grid__wrapper">
          <Route path='/intro' component={IntroPage}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/skills' component={SkillsPage}/>
          <Route path='/projects' component={ProjectsPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route exact path='/' render={() => (
            <Redirect to='/intro'/>
          )}/>
        </main>
      </div>
    );
  }
}

export default App;
