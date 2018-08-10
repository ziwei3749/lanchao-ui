const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
    // BDD 行为驱动测试  （行为描述，描述了input的一系列行为）

    it("存在.", () => {
        expect(Input).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    describe("属性", () => {
        // 提取重复的部分
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        });

        it("设置value.", () => {
            vm = new Constructor({
                propsData: {
                    value: "111"
                }
            }).$mount();
            const inputElement = vm.$el.querySelector("input");
            expect(inputElement.value).to.equal("111");
        });

        it("设置disabled.", () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector("input");
            expect(inputElement.hasAttribute("disabled")).to.equal(true);
        });

        it("设置readonly", () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector("input");
            expect(inputElement.hasAttribute("readonly")).to.equal(true);
        });

        it("设置error", () => {
            vm = new Constructor({
                propsData: {
                    error: "你错了"
                }
            }).$mount();
            const useElement = vm.$el.querySelector("use");
            // 期待有一个icon
            expect(useElement.getAttribute("xlink:href")).to.equal("#i-error");
            // 期待有一个errorMessage
            const errorMessageElement = vm.$el.querySelector(".errorMessage");
            expect(errorMessageElement.innerText).to.equal("你错了");
        });
    });

    describe("事件", () => {
        // 提取重复的部分
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        });

        it("支持change/input/focus/blur", () => {
            ["change", "input", "focus", "blur"].forEach(eventName => {
                vm = new Constructor().$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                // 如何手动触发change事件,这个change的是不可信的，但是几乎可以模拟
                const event = new Event(eventName);
                let inputElement = vm.$el.querySelector("input");
                inputElement.dispatchEvent(event);

                expect(callback).to.have.been.called;
                expect(callback).to.have.been.calledWith(event); // change事件的第一个参数是event
            });
        });

        // it("支持change", () => {
        //     vm = new Constructor().$mount();
        //     const callback = sinon.fake();
        //     vm.$on("change", callback);
        //     // 如何手动触发change事件,这个change的是不可信的，但是几乎可以模拟
        //     const event = new Event("change");
        //     let inputElement = vm.$el.querySelector("input");
        //     inputElement.dispatchEvent(event);

        //     expect(callback).to.have.been.called;
        //     expect(callback).to.have.been.calledWith(event); // change事件的第一个参数是event
        // });

        // it("支持input", () => {
        //     vm = new Constructor().$mount();
        //     const callback = sinon.fake();
        //     vm.$on("input", callback);
        //     // 如何手动触发change事件,这个change的是不可信的，但是几乎可以模拟
        //     const event = new Event("input");
        //     let inputElement = vm.$el.querySelector("input");
        //     inputElement.dispatchEvent(event);

        //     expect(callback).to.have.been.called;
        //     expect(callback).to.have.been.calledWith(event); // change事件的第一个参数是event
        // });

        // it("支持focus", () => {
        //     vm = new Constructor().$mount();
        //     const callback = sinon.fake();
        //     vm.$on("focus", callback);
        //     // 如何手动触发change事件,这个change的是不可信的，但是几乎可以模拟
        //     const event = new Event("focus");
        //     let inputElement = vm.$el.querySelector("input");
        //     inputElement.dispatchEvent(event);

        //     expect(callback).to.have.been.called;
        //     expect(callback).to.have.been.calledWith(event); // change事件的第一个参数是event
        // });

        // it("支持blur", () => {
        //     vm = new Constructor().$mount();
        //     const callback = sinon.fake();
        //     vm.$on("blur", callback);
        //     // 如何手动触发change事件,这个change的是不可信的，但是几乎可以模拟
        //     const event = new Event("blur");
        //     let inputElement = vm.$el.querySelector("input");
        //     inputElement.dispatchEvent(event);

        //     expect(callback).to.have.been.called;
        //     expect(callback).to.have.been.calledWith(event); // change事件的第一个参数是event
        // });
    });
});
