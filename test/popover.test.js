const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover", () => {
    it("存在.", () => {
        expect(Popover).to.be.ok;
    });

    it("设置position属性.", () => {
        Vue.component("l-popover", Popover);
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <l-popover position='top' ref="dom">
            <template slot="content">
                content内容
            </template>
            <button>点我</button>
        </l-popover>
        `;
        const vm = new Vue().$mount(div);
        /**
         * 思路： 获取btn触发click，让content显示，然后查看他的class为positon-top
         */
        const buttonDom = vm.$el.querySelector("button");
        buttonDom.click();

        const { contentWrapper } = vm.$refs.dom.$refs;
        expect(contentWrapper.classList.contains("position-top")).to.equal(
            true
        );
    } );
    
    xit("设置trigger属性.", () => {
        Vue.component("l-popover", Popover);
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <l-popover position='top' ref="dom">
            <template slot="content">
                content内容
            </template>
            <button>点我</button>
        </l-popover>
        `;
        const vm = new Vue().$mount(div);
        /**
         * 思路： 获取btn触发click，让content显示，然后查看他的class为positon-top
         */
        const buttonDom = vm.$el.querySelector("button");
        buttonDom.click();

        const { contentWrapper } = vm.$refs.dom.$refs;
        expect(contentWrapper.classList.contains("position-top")).to.equal(
            true
        );
    });
});
