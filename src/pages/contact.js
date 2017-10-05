import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layouts';
import ContactForm from '../components/ContactForm';
import SpeechBubble from '../components/SpeechBubble/index';

const ContactPage = (props) => (
  <Layout pageTitle="CONTACT ME">
    <SpeechBubble isLeftHanded={props.isLeftHanded}>
      <ContactForm/>
    </SpeechBubble>
  </Layout>
);

ContactPage.propTypes = {
  isLeftHanded: PropTypes.bool,
};

export default ContactPage;
