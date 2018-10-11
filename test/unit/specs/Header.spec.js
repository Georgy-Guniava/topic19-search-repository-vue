import Vue from 'vue';
import Header from '@/components/Header'

describe(' Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.logo__text h4').textContent)
      .to.equal('GitHub')
  })
})