import React, {Component} from 'react';
import ContactForm from './ContactForm';

class ContactPage extends Component {
  render() {
    return (
      <section id="contact" className="c-portfolio-grid__section">
        <header className="c-portfolio-page__header">
          <div className="c-portfolio-header-speech-bubble c-portfolio-header-speech-bubble--left">
            <h2 className="c-portfolio-header-speech-bubble__h2">CONTACT ME</h2>
          </div>
        </header>
        <div className="c-portfolio-page__body">
          <div className="l-portfolio-speech-bubble">
            <div className="c-portfolio-speech-bubble">
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
