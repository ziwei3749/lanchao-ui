import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Menu from "../../src/menu/menu.vue";
import MenuItem from "../../src/menu/menu-item.vue";
import SubMenu from "../../src/menu/sub-menu.vue";
import Vue from "vue";
chai.use(sinonChai);

Vue.component("l-menu-item", MenuItem);
Vue.component("l-sub-menu", SubMenu);

describe("Menu", () => {
    // BDD 行为驱动测试  （行为描述，描述了button的一系列行为）

    it("存在.", () => {
        expect(Menu).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("selected可以设置默认值", () => {
        const wrapper = mount(Menu, {
            slots: {
                default: `
                <l-menu-item name="home">首页</l-menu-item>
                <l-sub-menu name="about">
                  <template slot="title">关于</template>
                  <l-menu-item name="about1">关于1</l-menu-item>
                  <l-menu-item name="about2">关于2</l-menu-item>
                  <l-sub-menu name="lian_xi_fang_shi">
                    <template slot="title">联系方式</template>
                    <l-menu-item name="qq">QQ</l-menu-item>
                    <l-menu-item name="wx">微信</l-menu-item>
                  </l-sub-menu>
                </l-sub-menu>
                <l-menu-item name="hire">招聘</l-menu-item>
                `
            },
            propsData: {
                selected: "home"
            }
        } );
        expect(wrapper.find( '[data-name="home"]' ).classes()).contain('vertical-active')

    });

    it("selected改变时通过@update:selected能拿到值", () => {
        const wrapper = mount(Menu, {
            slots: {
                default: `
                    <l-menu-item name="home">首页</l-menu-item>
                    <l-menu-item name="hire">招聘</l-menu-item>
                    `
            },
            propsData: {
                selected: "hire"
            },
            listeners: {
                "update:selected": val => {
                    expect(val).to.eq("home");
                    wrapper.setProps( { selected: val } );
                    expect(wrapper.find(".vertical-active").text() === "首页");
                }
            }
        });

        // selected默认为hire，点击第一项之后，selected变为home
        wrapper.find(".l-menu-item").trigger("click");
    });
});
