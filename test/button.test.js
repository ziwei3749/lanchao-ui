const expect = chai.expect;
import Vue from "vue";
import Button from "../src/button";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe( "Button", () => {
    // BDD 行为驱动测试  （行为描述，描述了button的一系列行为）

    it("存在.", () => {
        expect(Button).to.be.ok;  // 不是Undefined null 0 '' 就是ok
    });

    it( "可以设置icon.", () => {
        // 实现 【可以设置icon】的行为
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        }).$mount();
        const useElement = vm.$el.querySelector("use");
        expect(useElement.getAttribute("xlink:href")).to.equal("#i-settings");
        vm.$destroy();
    });

    it("可以设置loading.", () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "settings",
                loading: true
            }
        }).$mount();
        const useElements = vm.$el.querySelectorAll("use");
        expect(useElements.length).to.equal(1);
        expect(useElements[0].getAttribute("xlink:href")).to.equal(
            "#i-loading"
        );
        vm.$destroy();
    });

    it("icon 默认的 order 是 1", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        }).$mount(div);
        const icon = vm.$el.querySelector("svg");
        expect(getComputedStyle(icon).order).to.eq("1");
        vm.$el.remove();
        vm.$destroy();
    });
    it("设置 iconPosition 可以改变 order", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "settings",
                iconPosition: "right"
            }
        }).$mount(div);
        const icon = vm.$el.querySelector("svg");
        expect(getComputedStyle(icon).order).to.eq("2");
        vm.$el.remove();
        vm.$destroy();
    });
    it("点击 button 触发 click 事件", () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: "settings"
            }
        }).$mount();

        const callback = sinon.fake(); // 假函数，如果不这样写，我们无法知道callback被调用过。内部就是一个标记
        vm.$on("click", callback);  // 这个假的函数知道自己有没有被调用过。相当于spy
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});
