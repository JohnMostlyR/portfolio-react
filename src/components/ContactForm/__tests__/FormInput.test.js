import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import FormInput, {Input, Textarea} from '../FormInput';

describe('FormInput', () => {
  const props = {
    helperText: 'This is a helper text',
    inputType: 'dummy',
    label: 'This is the label text',
    maxLength: 15,
    name: 'This is the input its name',
    minLength: 1,
    onChange: jest.fn(),
    placeholder: 'This is the placeholder text',
    isTextArea: true,
    validate: jest.fn(),
    value: 'The value',
  };

  it('should render and match the snapshot', () => {
    const wrapper = shallow(<FormInput name={props.name}
                                       label={props.label}
                                       onChange={props.onChange}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should receive props', () => {
    const wrapper = shallow(<FormInput {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    const wrapper = shallow(<FormInput {...props} />);

    expect(wrapper.state().value).toBe(props.value);
    expect(wrapper.state().error).toBe(false);
    expect(wrapper.state()._hasFocus).toBe(false);
    expect(wrapper.state()._height).toBe('');
  });

  describe('when a field has focus', () => {
    it('should act when an input field is rendered', () => {
      const wrapper = mount(<FormInput {...props} isTextArea={false}/>);
      wrapper.setState({_hasFocus: false});
      const input = wrapper.find(Input);
      input.simulate('focus', {target: {value: true}});
      expect(wrapper.state()._hasFocus).toBe(true);
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });

    it('should act when a textarea is rendered', () => {
      const wrapper = mount(<FormInput {...props} isTextArea={true}/>);
      wrapper.setState({_hasFocus: false});
      const input = wrapper.find(Textarea);
      input.simulate('focus', {target: {value: true}});
      expect(wrapper.state()._hasFocus).toBe(true);
      expect(toJson(wrapper)).toMatchSnapshot();
      wrapper.unmount();
    });
  });

  describe('when a user populates the input field', () => {
    const wrapper = mount(<FormInput {...props} isTextArea={false}/>);
    const value = 'testing123';

    wrapper.setState({_hasFocus: true});

    beforeEach(() => {
      const input = wrapper.find(Input);
      input.simulate('change', {
        target: {
          value: value,
        },
      });
    });

    it('the user input should be stored in the state property `value`', () => {
      expect(wrapper.state().value).toBe(value);
    });

    it('should update the helper text, when available', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should not show any errors as long as the field has the focus', () => {
      wrapper.setState({error: 'Error message.'});

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('and then moves away from the field', () => {
    let wrapper;
    let input;

    beforeEach(() => {
      wrapper = mount(<FormInput {...props} isTextArea={false}/>);
      input = wrapper.find(Input);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should validate the input', () => {
      const value = 'This is valid';

      input.simulate('blur', {
        target: {
          value: value,
        },
      });

      const invocationArgs = props.validate.mock.calls[0];
      expect(invocationArgs[0]).toBe(value);
    });

    it('should update state', () => {
      wrapper.setState({
        value: 'nothingness',
        error: false,
        _hasFocus: true,
      });

      const value = 'This is valid';

      input.simulate('blur', {
        target: {
          value: value,
        },
      });

      expect(wrapper.state().value).toBe(value);
      expect(wrapper.state().error).toBeFalsy();
      expect(wrapper.state()._hasFocus).toBe(false);
    });

    it('should show a message that the input is correct', () => {
      wrapper.setState({
        value: 'nothingness',
        error: false,
        _hasFocus: true,
      });

      input.simulate('blur', {
        target: {
          value: 'This is valid',
        },
      });

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should show an error message when the input is not correct', () => {
      props.validate.mockReturnValueOnce('Error, Error, Error');
      wrapper.setState({
        _hasFocus: true,
      });

      input.simulate('blur', {
        target: {
          value: '',
        },
      });

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call `this.props.onChange` function', () => {
      const invocationArgs = props.onChange.mock.calls[0];

      wrapper.setState({
        value: 'nothingness',
        error: false,
        _hasFocus: true,
      });

      input.simulate('blur', {
        target: {
          value: 'This is valid',
        },
      });

      expect(invocationArgs[0]).toMatchObject({
        name: props.name,
        value: 'This is valid',
        error: undefined,
      });
    });
  });

  describe('when a user populates the textarea', () => {
    const value = 'testing123\ntesting\ntesting\n123';
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<FormInput {...props} isTextArea={true} maxLength={300} />);
      wrapper.setState({_hasFocus: true});

      const textArea = wrapper.find(Textarea);

      textArea.simulate('change', {
        target: {
          value: value,
        },
      });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('the user input should be stored in the state property `value`', () => {
      expect(wrapper.state().value).toBe(value);
    });

    it('should update the helper text, when available', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should not show any errors as long as the field has the focus', () => {
      wrapper.setState({error: 'Error message.'});

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    describe('when the input wraps or with multi-lines', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = mount(<FormInput {...props} isTextArea={true} maxLength={300} />);
        wrapper.setState({_hasFocus: true});
      });

      afterEach(() => {
        wrapper.unmount();
      });

      it('TODO: should adjust its height', () => {
      //  TODO: Test should adjust its height
      })
    })
  });
});