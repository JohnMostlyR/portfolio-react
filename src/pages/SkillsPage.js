import React from 'react';
import Page from '../components/Page/Page';
import SpeechBubble from '../components/SpeechBubble';

class SkillsPage extends React.Component {
  render() {
    return (
      <Page pageTitle="MY SKILLS">
        <SpeechBubble>
          <p>My curiosity and a broad range of interest makes that I am very versatile
            and in my professional life I have touched front-end, back-end as well as UX.</p>
          <p>When it comes to my set of front-end developer skills I bring a very good
            understanding of <b>HTML5</b>, <b>(S)CSS</b> and <b>JavaScript</b>. I have used <b>jQuery</b> and used <b>Handlebars</b>
            as templating engine. I strive to use as less dependencies as possible though.</p>
          <p>Some of the tools I love to work with are <b>Git(Hub)</b>,
            <b>WebStorm</b>, <b>Chrome Developer Tools</b>, <b>Grunt</b> and <b>Photoshop</b>.</p>
          <p>Currently mastering <b>React</b>, where this site is an example of <span
            className="fa fa-smile-o" aria-hidden="true"/>.</p>
        </SpeechBubble>
      </Page>
    );
  }
}

export default SkillsPage;
