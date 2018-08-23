import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Button from "@/button.vue";
chai.use(sinonChai);

describe("Button", () => {
    // BDD 行为驱动测试  （行为描述，描述了button的一系列行为）

    it("存在.", () => {
        expect(Button).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("可以设置icon.", () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: "settings"
            }
        });
        const useWrapper = wrapper.find("use");
        expect(useWrapper.attributes().href).to.equal("#i-settings");
    });

    it("可以设置loading.", () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: "settings",
                loading: true
            }
        });
        const useWrapper = wrapper.find("use");
        expect(useWrapper.attributes().href).to.equal("#i-loading");
    });

    xit("icon 默认的 order 是 1", () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: "settings"
            }
        });
        const vm = wrapper.vm;
        const icon = vm.$el.querySelector("svg");
        expect(getComputedStyle(icon).order).to.eq("1");
    });
    xit("设置 iconPosition 可以改变 order", () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: "settings",
                iconPosition: "right"
            }
        });
        const vm = wrapper.vm;
        const icon = vm.$el.querySelector("svg");
        expect(getComputedStyle(icon).order).to.eq("2");
    });
    it("点击 button 触发 click 事件", () => {
        // 现在挂载组件，你便得到了这个包裹器
        const wrapper = mount(Button);
        // 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
        const vm = wrapper.vm;

        const callback = sinon.fake(); // 假函数，如果不这样写，我们无法知道callback被调用过。内部就是一个标记
        vm.$on("click", callback); // 这个假的函数知道自己有没有被调用过。相当于spy
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});
