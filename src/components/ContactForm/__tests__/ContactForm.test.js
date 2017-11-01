import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import ContactForm from '../index';
import FormInput from '../FormInput';

describe('ContactForm', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = mount(<ContactForm/>);
    instance = wrapper.childAt(0).instance();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render and match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('TODO: should validate the user\'s input', () => {
    // const spy = jest.spyOn(instance, 'onInputChange');
    // const input = wrapper.find(FormInput).first().find('input');
    //
    // instance.onChange({name: 'subject', value: 'Form field input', error: false});
    // expect(spy).toHaveBeenCalled();
    // console.log(instance.state);
  });

  describe('TODO: user input is not valid', () => {
    it('should give the user feedback on the mistakes');
    it('should not allow the user to send the form');
  });

  describe('TODO: user input is valid', () => {
    it('should give the user feedback that the input is valid');
    it('should enable the send button');
  });

  describe('TODO: the user clicks the `send` button', () => {
    it('should not do anything as long as the input is not valid');
    it('should send the filled in information when the input is valid');
  })
});