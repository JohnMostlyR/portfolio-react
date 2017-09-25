import React from 'react';
import Page from '../components/Page/Page';
import SpeechBubble from '../components/SpeechBubble';

class AboutPage extends React.Component {
  render() {
    return (
      <Page pageTitle="ABOUT ME">
        <SpeechBubble>
          <p>I am a front-end developer from Amsterdam, The Netherlands.</p>
          <p>I am customer driven with a passion for results and always going the
            extra mile to get things done. I like being social with my colleagues and love to bring in some humor.</p>
          <p>I enjoy the process of creative problem-solving and want to understand
            complex issues. I love innovation and to bring original ideas to people. Seeing people enjoy what I made,
            or played a part in, is of utmost importance to me.</p>
        </SpeechBubble>
      </Page>
    );
  }
}

export default AboutPage;
