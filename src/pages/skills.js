import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Row, Column} from 'hedron';
import Parser from 'html-react-parser';

import {getContentFromContentful} from '../clients/contentful/';
import StyledSection from '../components/StyledSection';
import SpeechBubble from '../components/SpeechBubble';
import PageHeader from '../components/PageHeader';

class Skills extends Component {
  state = {
    content: {
      en: '',
      nl: '',
    },
  };

  componentWillMount() {
    const json = getContentFromContentful({contentType: 'skills', locale: '*'});
    json.then(
        (json) => (this.setState({content: json})),
    );
  }

  render() {
    return (
        <StyledSection>
          <Row tagName={'div'}>
            <Column>
              <PageHeader isLeftHanded>
                <FormattedMessage id={'portfolio.page.skills.title'}
                                  defaultMessage={'MY SKILLS'}/>
              </PageHeader>
            </Column>
          </Row>
          <Row tagName={'div'}>
            <Column>
              <SpeechBubble>
                {Parser(this.state.content['en'] || '')}
              </SpeechBubble>
            </Column>
          </Row>
        </StyledSection>
    );
  }
}

export default Skills;
