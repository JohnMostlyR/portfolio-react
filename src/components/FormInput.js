import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  static propTypes = {
    helperText: PropTypes.string,
    inputType: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isTextArea: PropTypes.bool,
    validate: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    inputType: 'text',
    isTextArea: false,
  };

  state = {
    value: this.props.value,
    error: false,
    _hasFocus: false,
    _height: '',
  };

  componentWillReceiveProps(update) {
    this.setState({value: update.value});
  }

  onChange = (ev) => {
    const value = ev.target.value;
    let _height = '';

    if (this.refs.textAreaElement) {
      if (this.refs.textAreaElement.scrollHeight > this.refs.textAreaElement.clientHeight) {
        _height = this.refs.textAreaElement.scrollHeight;
      } else {
        _height = this.refs.textAreaElement.clientHeight;
      }
    }

    this.setState({value, _height});
  };

  onBlur = (ev) => {
    const name = this.props.name;
    const value = ev.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    const _hasFocus = false;

    this.setState({value, error, _hasFocus});

    this.props.onChange({name, value, error});
  };

  onFocus = () => {
    this.setState({_hasFocus: true,});
  };

  setFocus = (ev) => {
    if (this.refs.inputElement) {
      this.refs.inputElement.focus();
    } else if (this.refs.textAreaElement) {
      this.refs.textAreaElement.focus();
    }
  };

  render() {
    const renderInput = () => (
      <input
        className="c-portfolio-form__input"
        type={this.props.inputType}
        name={this.props.name}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={this.state.value}
        ref='inputElement'
      />
    );

    const renderTextArea = () => (
      <textarea
        style={{height: this.state._height}}
        className="c-portfolio-form__input c-portfolio-form__input--textarea"
        name={this.props.name}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        value={this.state.value}
        ref='textAreaElement'
      />
    );

    const renderHelperText = () => {
      if (!this.props.helperText) return '';

      let helperText = this.props.helperText;

      if (this.props.minLength || this.props.maxLength) {
        helperText = `${helperText} Should be between ${this.props.minLength} and ${this.props.maxLength} characters. Is now: ${this.state.value.length}`;
      }

      if (this.state._hasFocus || this.state.error || !this.state.value) {
        return helperText;
      } else if (!this.state.error) {
        return 'Thanks!';
      }

      return '';
    };

    return (
      <div className="c-portfolio-form__input-group">
        <label
          className="c-portfolio-form__label"
          htmlFor="name"
          onClick={this.setFocus}
        >
          <span
            className={`c-portfolio-form__label-content${(this.state._hasFocus || this.state.value) ? ' c-portfolio-form__label-content--on-focus' : ''}`}>{this.props.label}<span
            className="c-portfolio-form__label-content--placeholder"><i>{this.props.placeholder}</i></span></span>
        </label>
        {(this.props.isTextArea) ? renderTextArea() : renderInput()}
        <div className="c-portfolio-form__feedback-group">
          <span
            className={`c-portfolio-form__error-message${(this.state._hasFocus || !this.state.error) ? '' : ' is-active'}`}>{`${this.state.error} `}</span>
          <span
            className={'c-portfolio-form__helper-text is-active'}>{renderHelperText()}</span>
        </div>
      </div>
    );
  }
}

export default FormInput;
