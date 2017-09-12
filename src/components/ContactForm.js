import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import FormInput from './FormInput';

class ContactForm extends Component {
  state = {
    field: {
      subject: '',
      message: '',
      name: '',
      email: '',
    },
    fieldError: {},
    _sendStatus: 'IDLE', // IDLE, SENDING, SUCCESS, ERROR
  };

  validateForm = () => {
    const field = this.state.field;
    const fieldError = this.state.fieldError;
    const errMessages = Object.keys(fieldError).filter((key) => fieldError[key]);

    if (!field.email) {
      return true;
    }

    if (!field.message) {
      return true;
    }

    if (!field.name) {
      return true;
    }

    if (!field.subject) {
      return true;
    }

    if (errMessages.length) {
      return true;
    }

    return false;
  };

  onInputChange = ({name, value, error}) => {
    const field = this.state.field;
    const fieldError = this.state.fieldError;

    field[name] = value;
    fieldError[name] = error;

    this.setState({field, fieldError, _sendStatus: 'IDLE'});
  };

  _checkResponseStatus = (response) => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  _parseJSON = (response) => {
    response.json();
  };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    if (this.validateForm()) {
      return;
    }

    this.setState({_sendStatus: 'SENDING'});
    const field = this.state.field;

    fetch('https://meester-johan.info/contact-request', {
      method: 'post',
      headers: new Headers(
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      ),
      body: JSON.stringify({
        email: field.email,
        message: field.message,
        name: field.name,
        subject: field.subject
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({_sendStatus: 'SUCCESS'});
          console.log('Request succeeded with JSON response', data);
        } else {
          this.setState({_sendStatus: 'ERROR'});
          console.log('Request failed with JSON response', data);
          this.validateForm();
        }
      })
      .catch(error => {
        this.setState({_sendStatus: 'ERROR'});
        console.log(`Request failed with error: ${error}`);
      });
  };

  render() {
    const renderSendButton = () => {
      return {
        IDLE: <button
          className="c-portfolio-form__button"
          disabled={this.validateForm()}>
          <span><span
            className="fa fa-paper-plane c-portfolio-form__button-icon"
            aria-hidden="true"></span> Send</span>
        </button>,
        SENDING: <button
          className="c-portfolio-form__button"
          disabled>
          <span><span
            className="fa fa-paper-plane c-portfolio-form__button-icon"
            aria-hidden="true"></span> Sending...</span>
        </button>,
        SUCCESS: <button
          className="c-portfolio-form__button"
          disabled>
          <span><span
            className="fa fa-check c-portfolio-form__button-icon"
            aria-hidden="true"></span> Sent!</span>
        </button>,
        ERROR: <button
          className="c-portfolio-form__button"
          disabled={this.validateForm()}>
          <span><span
            className="fa fa-frown-o c-portfolio-form__button-icon"
            aria-hidden="true"></span> Failed. Please try again</span>
        </button>,
      }[this.state._sendStatus];
    };

    return (
      <form id="js-portfolio-form" className="c-portfolio-form" name="contact-form" action="#"
            acceptCharset="utf-8" method="post" onSubmit={this.onFormSubmit}>
        <div className="c-portfolio-form__frame">
          <div className="c-portfolio-form__content">
            <div className="c-portfolio-form__info">
              <ul className="c-portfolio-form__info-list">
                <li><span className="fa fa-info-circle" aria-hidden="true"/> Please fill in all fields
                </li>
              </ul>
            </div>
            <div className="c-portfolio-form__body">
              <FormInput
                helperText="Please provide a subject for your message."
                label="Subject"
                maxLength={50}
                minLength={3}
                name="subject"
                onChange={this.onInputChange}
                validate={val => (isLength(val, {min: 3, max: 50})) ? false : 'A subject is required.'}
                value={this.state.field.subject}
              />
              <FormInput
                helperText="Please add your message here."
                label="Your message"
                maxLength={300}
                minLength={5}
                name="message"
                onChange={this.onInputChange}
                isTextArea={true}
                validate={val => (isLength(val, {min: 5, max: 300})) ? false : 'A message is required.'}
                value={this.state.field.message}
              />
              <FormInput
                helperText="Please add your name here."
                label="Your name"
                maxLength={50}
                minLength={2}
                name="name"
                placeholder="(e.g. John Doo)"
                onChange={this.onInputChange}
                validate={val => (isLength(val, {min: 2, max: 50})) ? false : 'Your name is required.'}
                value={this.state.field.name}
              />
              <FormInput
                helperText="Please add your email address here."
                inputType="email"
                label="Your email address"
                name="email"
                placeholder="(e.g. my@email.com)"
                onChange={this.onInputChange}
                validate={val => (isEmail(val)) ? false : 'Your email address is required.'}
                value={this.state.field.email}
              />
            </div>
            <div className="c-portfolio-form__footer">
              {
                renderSendButton()
              }
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
