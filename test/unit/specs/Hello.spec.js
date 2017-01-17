import Vue from 'vue';
import Hello from 'src/components/Hello';
import {mount} from 'avoriaz';

describe('Hello.vue', () => {
  it('renders an h1', () => {
    const wrapper = mount(Hello);
    expect(wrapper.find('h1').length).to.equal(1);
  });

  it('h1 renders data.msg as text', () => {
    const wrapper = mount(Hello);
    const msg = wrapper.data().msg;
    expect(wrapper.find('h1')[0].text()).to.equal(msg);
  });

  it('h1 text changes when button is clicked', () => {
    const expectedMessage = 'new message';

    const wrapper = mount(Hello);
    const button = wrapper.find('#change-message')[0];
    button.simulate('click');

    expect(wrapper.find('h1')[0].text()).to.equal(expectedMessage);
  });
});
