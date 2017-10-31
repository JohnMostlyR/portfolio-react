import React from 'react';
import {mount} from 'enzyme';
import toJson from 'enzyme-to-json';

import SendButton from '../SendButton';

describe('SendButton', () => {
  it('should render and match the snapshot', () => {
    const wrapper = mount(<SendButton/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  it('should have the correct default props', () => {
    const wrapper = mount(<SendButton/>);
    expect(wrapper.prop('disabled')).toBe(true);
    expect(wrapper.prop('buttonState')).toBe('idle');
  });

  it('should respond when set to `enabled`', () => {
    const wrapper = mount(<SendButton disabled={false}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });

  describe('when the `state` changes', () => {
    let wrapper;

    afterEach(() => {
      wrapper.unmount();
    });

    it('should change its appearance when state is `sending`', () => {
      wrapper = mount(<SendButton disabled={false} buttonState={'sending'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should change its appearance when state is `success`', () => {
      wrapper = mount(<SendButton disabled={false} buttonState={'success'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should change its appearance when state is `error`', () => {
      wrapper = mount(<SendButton disabled={false} buttonState={'error'} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('TODO: TEST THIS: should only be allowed to be given a select set of states', () => {
      // TODO: should test this but at the moment a bit lost as to how.
    });
  });
});