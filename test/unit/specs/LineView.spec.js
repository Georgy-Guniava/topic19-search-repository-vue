import LineView from '@/components/LineView';
import { mount } from 'vue-test-utils'
import repository from '../mockRepository';
import sinon from 'sinon';


describe('LineView.vue', () => {
  it('Click on check box', () => {
    const spy = sinon.spy();
    const wrapper = mount(LineView, {
      propsData: {
        repositories: [repository] ,
        clickOnCheckbox: spy
      }
    });

    wrapper.find('.string-item button').trigger('click');
    spy.should.have.been.calledWith('1')
  });
});
