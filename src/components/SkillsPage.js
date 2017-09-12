import React from 'react';

class SkillsPage extends React.Component {
  render() {
    return (
      <section id="skills" className="c-portfolio-grid__section c-portfolio-skills">
        <header className="c-portfolio-page__header">
          <div className="c-portfolio-header-speech-bubble c-portfolio-header-speech-bubble--left">
            <h2 className="c-portfolio-header-speech-bubble__h2">MY SKILLS</h2>
          </div>
        </header>
        <div className="c-portfolio-page__body">
          <div className="l-portfolio-speech-bubble">
            <div className="c-portfolio-speech-bubble">
              <p className="c-portfolio-paragraph">My curiosity and a broad range of interest makes that I am very versatile and in my professional life I have touched front-end, back-end as well as UX.</p>
              <p className="c-portfolio-paragraph">When it comes to my set of front-end developer skills I bring a very good understanding of <b>HTML5</b>, <b>(S)CSS</b> and <b>JavaScript</b>. I have used <b>jQuery</b> and used <b>Handlebars</b> as templating engine. I strive to use as less dependencies as possible though.</p>
                <p className="c-portfolio-paragraph">Some of the tools I love to work with are <b>Git(Hub)</b>, <b>WebStorm</b>, <b>Chrome Developer Tools</b>, <b>Grunt</b> and <b>Photoshop</b>.</p>
              <p className="c-portfolio-paragraph">Currently mastering <b>React</b>, where this site is an example of <span className="fa fa-smile-o" aria-hidden="true"/>.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsPage;
