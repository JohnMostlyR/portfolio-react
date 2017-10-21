import React, {Component} from 'react';
import {intlShape, injectIntl, FormattedMessage} from 'react-intl';
import {Row, Column} from 'hedron';
import Parser from 'html-react-parser';

import {getContentFromContentful} from '../clients/contentful/';
import StyledSection from '../components/StyledSection';
import SpeechBubble from '../components/SpeechBubble';
import PageHeader from '../components/PageHeader';

class Skills extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  };

  state = {
    content: 'Loading...',
  };

  componentWillMount() {
    const content = getContentFromContentful(
        {
          contentType: 'skills',
          locale: this.props.intl.locale
        }
    );

    content
        .then(
            (_content) => {
              this.setState({content: _content});
            },
        )
        .catch(err => {
          console.error('Unable to get skills content from CMS: ', err.message);
        });
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
                {Parser(this.state.content || '')}
              </SpeechBubble>
            </Column>
          </Row>
        </StyledSection>
    );
  }
}

export default injectIntl(Skills);
