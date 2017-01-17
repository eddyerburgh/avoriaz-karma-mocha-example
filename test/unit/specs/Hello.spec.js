import Vue from 'vue';
import Hello from 'src/components/Hello';
import {mount} from 'avoriaz';

describe('Hello.vue', () => {
  it('renders an h1 containing correct text', () => {
    const wrapper = mount(Hello);
    expect(wrapper.find('h1')[0].text()).to.equal('Welcome to Your Vue.js App');
  });
});
