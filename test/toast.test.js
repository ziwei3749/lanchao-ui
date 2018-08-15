const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
    it("存在.", () => {
        expect(Toast).to.be.ok;
    });

    describe("属性", () => {
        it("设置 autoClose", done => {
            let div = document.createElement("div");
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: 1000
                }
            }).$mount(div);
            vm.$on("close", () => {
                // 希望设置了autoClose之后 1.5秒后，toast不存在于body之中
                const hasToast = document.body.contains(vm.$el);
                expect(hasToast).to.equal(false);
                done();
            });
        });

        it(" 设置closeButton", () => {
            // 这里我们比较关注，事件是否触发，不需要创建div
            const Constructor = Vue.extend(Toast);
            const callback = sinon.fake(); // 把假函数传递进去，来判断这个函数是否被调用过
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "关闭吧",
                        callback: callback
                    }
                }
            }).$mount();

            const closeBtnElement = vm.$el.querySelector(".l-close-btn");
            expect(closeBtnElement.innerText.trim()).to.equal("关闭吧");
            closeBtnElement.click();
            expect(callback).to.have.been.called;
        });

        it("设置 enableHtml", () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            });
            vm.$slots.default = "<strong id='test'>test enableHtml</strong>";
            vm.$mount();

            let strongDom = vm.$el.querySelector("#test");

            // expect(strongDom).to.be.ok
            expect(strongDom).to.exist;
        });

        it("设置position", () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    position: "bottom"
                }
            } ).$mount();
            expect(vm.$el.classList.contains('l-position-bottom')).to.equal(true)
        });
    });
});
