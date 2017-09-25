import React, {Component} from 'react';
import Projects from './Projects/Projects';

class ProjectsPage extends Component {
  render() {
    return (
      <section id="projects" className="c-portfolio-grid__section">
        <header className="c-portfolio-page__header">
          <div className="c-portfolio-header-speech-bubble c-portfolio-header-speech-bubble--left">
            <h2 className="c-portfolio-header-speech-bubble__h2">MY PROJECTS</h2>
          </div>
        </header>
        <div className="l-portfolio-projects">
          <div className="l-portfolio-projects__col--left">&nbsp;</div>
          <Projects/>
          <div className="l-portfolio-projects__col--right">&nbsp;</div>
        </div>
      </section>
    );
  }
}

export default ProjectsPage;
