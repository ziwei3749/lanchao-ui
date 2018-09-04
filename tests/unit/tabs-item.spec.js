import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Vue from "vue";
import Tabs from "../../src/tabs/tabs.vue";
import TabsHead from "../../src/tabs/tabs-head.vue";
import TabsBody from "../../src/tabs/tabs-body.vue";
import TabsItem from "../../src/tabs/tabs-item.vue";
import TabsPane from "../../src/tabs/tabs-pane.vue";

chai.use(sinonChai);

Vue.component("l-tabs", Tabs);
Vue.component("l-tabs-head", TabsHead);
Vue.component("l-tabs-body", TabsBody);
Vue.component("l-tabs-item", TabsItem);
Vue.component("l-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

/**
 *  运行npm run dev-test会报错  Injection "eventBus" not found
 *
 * 因为tab-item和tabs强耦合的组合组件，但是测试代码里，只是实例化一个tabs-item，导致没有tabs，也就没有eventBus
 *
 * 我们可以考虑把测试用例写的更全，就不会报这个错误了
 */

describe("tabs-item组件", () => {
  it("存在", () => {
    expect(TabsItem).to.be.ok;
  });
  it("接受 name 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx"
      }
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });
  it("接受 disabled 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx",
        disabled: true
      }
    }).$mount();
    expect(vm.$el.classList.contains("l-disabled")).to.be.true;
    // 测试设置disabled后，是否无法真的无法点击
    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.not.been.called;
  });
});
