import Vue from "vue";
import Row from "@/row";
import Col from "@/col";
Vue.component("l-row", Row);
Vue.component("l-col", Col);
import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

describe("Row", () => {
    it("存在.", () => {
        expect(Row).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("接受gutter属性.", () => {
        const wrapper = mount(Row, {
            attachToDocument: true,
            slots: {
                template: `<l-col span="12"></l-col>
                <l-col span="12"></l-col>`
            },
            propsData: {
                gutter: 20
            }
        });
        const vm = wrapper.vm;
        setTimeout(() => {
            let row = vm.$el;
            let cols = vm.$el.querySelectorAll(".l-col");
            expect(getComputedStyle(row).marginLeft).to.equal(
                "-10px"
            );
            expect(getComputedStyle(row).marginRight).to.equal(
                "-10px"
            );
            expect(getComputedStyle(cols[0]).paddingLeft).to.equal("10px");
            expect(getComputedStyle(cols[1]).paddingRight).to.equal("10px");
        });
    });

    it("接受align", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: "center"
            }
        }).$mount(div);

        expect(vm.$el.classList.contains("align-center")).to.equal(true);
        expect(getComputedStyle(vm.$el).justifyContent).to.equal("center");
        // 不挂在到页面里，css就没有值
        div.remove();
        vm.$destroy();
    });
});
