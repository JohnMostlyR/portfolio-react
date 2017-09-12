import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <section id="about" className="c-portfolio-grid__section">
        <header className="c-portfolio-page__header">
          <div className="c-portfolio-header-speech-bubble c-portfolio-header-speech-bubble--left">
            <h2 className="c-portfolio-header-speech-bubble__h2">ABOUT ME</h2>
          </div>
        </header>
        <div className="c-portfolio-page__body">
          <div className="l-portfolio-speech-bubble">
            <div className="c-portfolio-speech-bubble">
              <p className="c-portfolio-paragraph">I am a front-end developer from Amsterdam, The Netherlands.</p>
              <p className="c-portfolio-paragraph">I am customer driven with a passion for results and always going the extra mile to get things done. I like being social with my colleagues and love to bring in some humor.</p>
              <p className="c-portfolio-paragraph">I enjoy the process of creative problem-solving and want to understand complex issues. I love innovation and to bring original ideas to people. Seeing people enjoy what I made, or played a part in, is of utmost importance to me.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
