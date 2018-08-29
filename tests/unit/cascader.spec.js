import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Cascader from "@/cascader.vue";
import CascaderItems from "@/cascader-items.vue";
import Vue from "../../node_modules/vue/dist/vue";
chai.use(sinonChai);

Vue.component("l-cascader", Cascader);
Vue.component("l-cascader-item", CascaderItems);

let source = [
    {
        name: "浙江",
        children: [
            {
                name: "杭州",
                children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
                name: "嘉兴",
                children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
        ]
    },
    {
        name: "福建",
        children: [
            {
                name: "福州",
                children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
        ]
    },
    {
        name: "安徽",
        children: [
            {
                name: "合肥",
                children: [{ name: "瑶海" }, { name: "庐阳" }, { name: "仓山" }]
            }
        ]
    }
];

let selected = [];

describe("Cascader", () => {
    it("存在.", () => {
        expect(Cascader).to.be.ok;
    });

    it("可以设置popoverHeight.", () => {
        const wrapper = mount(Cascader, {
            attachToDocument: true,
            propsData: {
                source: source,
                selected: selected,
                popoverHeight: "201px"
            }
        });
        wrapper.find(".l-trigger").trigger("click");
        const popoverDom = wrapper.find(".popover").element;
        expect(getComputedStyle(popoverDom).height).to.equal("201px");
    });

    xit("测试选中后，v-model值是否正确.", () => {
        const wrapper = mount(Cascader, {
            attachToDocument: true,
            propsData: {
                source: source,
                selected: selected,
                popoverHeight: "201px"
            }
        });
        const vm = wrapper.vm;
        console.log(wrapper.props());
        vm.$el.querySelector(".l-trigger").click();
        vm.$el.querySelector(".l-label").click();
        console.log(vm.$el.outerHTML);
        /**
         * 这个跑不通
         */
    });

    it("测试选择省市区后，cascader组件的v-model值是否正确.", done => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <l-cascader :source.sync="source"
                    v-model="selected"
                    popover-height="200px">
        </l-cascader>
    `;
        const vm = new Vue({
            el: div,
            data: {
                source,
                selected
            }
        });
        vm.$el.querySelector(".l-trigger").click();
        setTimeout(() => {
            vm.$el.querySelector(".l-label").click();
            setTimeout(() => {
                vm.$el
                    .querySelector(".l-right")
                    .querySelector(".l-label")
                    .click();
                setTimeout(() => {
                    vm.$el
                        .querySelector(".l-right")
                        .querySelector(".l-right")
                        .querySelector(".l-label")
                        .click();
                    setTimeout(() => {
                        expect(vm.selected[0].name).to.equal('浙江')
                        expect(vm.selected[1].name).to.equal('杭州')
                        expect(vm.selected[2].name).to.equal('上城')
                        done();
                    });
                });
            });
        });
    });
});
