import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";

import Vue from "vue";
import Tabs from "@/tabs.vue";
import TabsHead from "@/tabs-head.vue";
import TabsBody from "@/tabs-body.vue";
import TabsItem from "@/tabs-item.vue";
import TabsPane from "@/tabs-pane.vue";

chai.use(sinonChai);

Vue.component("l-tabs", Tabs);
Vue.component("l-tabs-head", TabsHead);
Vue.component("l-tabs-body", TabsBody);
Vue.component("l-tabs-item", TabsItem);
Vue.component("l-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs组件", () => {
    it("存在", () => {
        expect(Tabs).to.be.ok;
    });

    it("设置 selected prop", done => {
        // const div = document.createElement("div");
        // div.innerHTML = `
        //     <l-tabs selected="finance">
        //        <l-tabs-head>
        //             <l-tabs-item name="woman">美女</l-tabs-item>
        //             <l-tabs-item name="finance">财经</l-tabs-item>
        //             <l-tabs-item name="sports">体育</l-tabs-item>
        //        </l-tabs-head>
        //        <l-tabs-body>
        //             <l-tabs-pane name="woman">美女相关资讯</l-tabs-pane>
        //             <l-tabs-pane name="finance">财经相关资讯</l-tabs-pane>
        //             <l-tabs-pane name="sports">体育相关资讯</l-tabs-pane>
        //        </l-tabs-body>
        //     </l-tabs>
        // `;
        // document.body.appendChild(div);
        // const vm = new Vue().$mount( div );

        const wrapper = mount(Tabs, {
            attachToDocument: true,
            slots: {
                default: `
        <l-tabs selected="finance">
           <l-tabs-head>
                <l-tabs-item name="woman">美女</l-tabs-item>
                <l-tabs-item name="finance">财经</l-tabs-item>
                <l-tabs-item name="sports">体育</l-tabs-item>
           </l-tabs-head>
           <l-tabs-body>
                <l-tabs-pane name="woman">美女相关资讯</l-tabs-pane>
                <l-tabs-pane name="finance">财经相关资讯</l-tabs-pane>
                <l-tabs-pane name="sports">体育相关资讯</l-tabs-pane>
           </l-tabs-body>
        </l-tabs>
    `
            },
            propsData: {
                selected: "finance"
            }
        });
        const vm = wrapper.vm;

        vm.$nextTick(() => {
            // 因为active类名是异步的，所以得用done()以及nextTick
            let currentItem = vm.$el.querySelector(
                ".l-tabs-item[data-name='finance']"
            );
            expect(currentItem.classList.contains("l-active")).to.be.equal(
                true
            );
            done();
        });
    });

    it("可以接受direction", () => {
        // 暂时没实现这个功能
    });
});
