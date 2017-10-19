import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Row, Column} from 'hedron';

import StyledSection from '../components/StyledSection';
import SpeechBubble from '../components/SpeechBubble';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default ((props) => (
    <StyledSection>
      <Row tagName={'div'}>
        <Column>
          <PageHeader isLeftHanded>
            <FormattedMessage id={'portfolio.page.contact.title'}
                              defaultMessage={'CONTACT ME'}/>
          </PageHeader>
        </Column>
      </Row>
      <Row tagName={'div'}>
        <Column>
          <SpeechBubble>
            <ContactForm/>
          </SpeechBubble>
        </Column>
      </Row>
    </StyledSection>
));
