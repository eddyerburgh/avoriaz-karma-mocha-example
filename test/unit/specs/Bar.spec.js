import { mount } from 'avoriaz';
import Bar from 'src/components/Bar';

describe('Foo.vue', () => {
  it('renders a div with class bar', () => {
    const wrapper = mount(Bar);
    expect(wrapper.is('div')).to.equal(true);
    expect(wrapper.hasClass('bar')).to.equal(true);
  });
});
