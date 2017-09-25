import React from 'react';
import Page from '../components/Page/Page';
import ContactForm from '../components/ContactForm';
import SpeechBubble from '../components/SpeechBubble';

class ContactPage extends React.Component {
  render() {
    return (
      <Page pageTitle="CONTACT ME">
        <SpeechBubble isLeftHanded={this.props.isLeftHanded}>
          <ContactForm/>
        </SpeechBubble>
      </Page>
    );
  }
}

export default ContactPage;
