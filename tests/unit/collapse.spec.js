import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

Vue.config.productionTip = false;
Vue.config.devtools = false;

import Vue from "vue";
import Collapse from "../../src/collapse/collapse";
import CollapseItem from "../../src/collapse/collapse-item";
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);

describe("Collapse", () => {
    it("存在.", () => {
        expect(Collapse).to.exist;
    });

    it("接受 selected 属性", done => {
        const wrapper = mount(Collapse, {
            slots: {
                template: `
          <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
          <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
          <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
    `
            },
            propsData: {
                selected: ["1", "2"]
            }
        });
        const vm = wrapper.vm;

        setTimeout(() => {
            expect(vm.$el.querySelector("#content-1")).to.exist;
            expect(vm.$el.querySelector("#content-2")).to.exist;
            expect(vm.$el.querySelector("#content-3")).to.not.exist;
            done();
        });
    });

    it("接受 single 属性", done => {
        const wrapper = mount(Collapse, {
            slots: {
                template: `
              <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
              <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
              <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
        `
            },
            propsData: {
                selected: ["1"],
                single: true
            }
        });
        const vm = wrapper.vm;

        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click();
            setTimeout(() => {
                expect(vm.$el.querySelector("#content-1")).to.not.exist;
                expect(vm.$el.querySelector("#content-2")).to.exist;
                done();
            });
        });
    });

    xit("触发 update:selected 事件", done => {
        Vue.component("g-collapse", Collapse);
        Vue.component("g-collapse-item", CollapseItem);
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <g-collapse :selected="xxx" @update:selected="onSelect">
          <g-collapse-item title="标题1" name="1"><span id="content-1">1</span></g-collapse-item>
          <g-collapse-item title="标题2" name="2"><span id="content-2">2</span></g-collapse-item>
          <g-collapse-item title="标题3" name="3"><span id="content-3">3</span></g-collapse-item>
        </g-collapse>
    `;
        const callback = sinon.fake();
        const vm = new Vue({
            el: div,
            data: {
                xxx: ["1"]
            },
            methods: {
                onSelect: callback
            }
        });

        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click();
            setTimeout(() => {
                expect(callback).to.have.been.called;
                done();
            });
        });
    });
});
