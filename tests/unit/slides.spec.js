import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Slides from "../../src/slides/slides.vue";
import SlidesItem from "../../src/slides/slides-item.vue";

import Vue from "vue";
Vue.component("l-slides-item", SlidesItem);

chai.use(sinonChai);

describe("Slides", () => {
    it("存在.", () => {
        expect(Slides).to.be.ok;
    });

    it("接受 l-slides-item，默认展示第一个", done => {
        const wrapper = mount(Slides, {
            slots: {
                default: `
          <l-slides-item name="1">
            <div class="box1">1</div>
          </l-slides-item>
          <l-slides-item name="2">
            <div class="box2">2</div>
          </l-slides-item>
          <l-slides-item name="3">
            <div class="box3">3</div>
          </l-slides-item>
        `
            }
        });
        setTimeout(() => {
            expect(wrapper.find(".box1").exists()).to.be.true;
            done();
        });
    });

    it("selected是多少，选中的就是多少", done => {
        const wrapper = mount(Slides, {
            propsData: {
                selected: "3"
            },
            slots: {
                default: `
          <l-slides-item name="1">
            <div class="box1">1</div>
          </l-slides-item>
          <l-slides-item name="2">
            <div class="box2">2</div>
          </l-slides-item>
          <l-slides-item name="3">
            <div class="box3">3</div>
          </l-slides-item>
        `
            }
        });
        setTimeout(() => {
            expect(wrapper.find(".box3").exists()).to.be.true;
            done();
        });
    });

    it("点击第二个，selected就变为2", done => {
        const wrapper = mount(Slides, {
            propsData: {
                selected: "1"
            },
            slots: {
                default: `
          <l-slides-item name="1">
            <div class="box1">1</div>
          </l-slides-item>
          <l-slides-item name="2">
            <div class="box2">2</div>
          </l-slides-item>
          <l-slides-item name="3">
            <div class="box3">3</div>
          </l-slides-item>
        `
            },
            listeners: {
                "update:selected": val => {
                    /**
                     *  setProps是一个很好的api，可以真的在这里修改propsData
                     *  listeners也是一个很好的api
                     *  结合listners + setProps就可以模拟 .sync的效果
                     *  在级联选择器和tree组件测试时，很有用
                     */
                    // wrapper.setProps({ selected: val });
                    // console.log(wrapper.vm.selected)
                    expect(val).to.eq("2");
                    done();
                }
            }
        });
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger("click");
        });
    });

    it("会自动播放", done => {
        let fakeCallback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 100,
                selected: "1"
            },
            slots: {
                default: `
          <l-slides-item name="1">
            <div class="box1">1</div>
          </l-slides-item>
          <l-slides-item name="2">
            <div class="box2">2</div>
          </l-slides-item>
          <l-slides-item name="3">
            <div class="box3">3</div>
          </l-slides-item>
        `
            },
            listeners: {
                "update:selected": fakeCallback
            }
        });
        setTimeout(() => {
            expect(fakeCallback).to.have.been.called;
            expect(fakeCallback).to.have.been.calledWith("2");
            done();
        }, 110);
    });

    // 可以点击上一页
    it("可以点击上一张", done => {
        const wrapper = mount(Slides, {
            slots: {
                default: `
                <l-slides-item name="1">
                  <div class="box1">1</div>
                </l-slides-item>
                <l-slides-item name="2">
                  <div class="box2">2</div>
                </l-slides-item>
                <l-slides-item name="3">
                  <div class="box3">3</div>
                </l-slides-item>
              `
            },
            listeners: {
                "update:selected": val => {
                    wrapper.setProps({ selected: val });
                }
            }
        });
        wrapper.find('[data-action="prev"]').trigger("click");
        setTimeout(() => {
            expect(wrapper.find(".box3").exists()).to.be.true;
            done();
        });
    });
    // 可以点击下一页
    it("可以点击下一张", done => {
        const wrapper = mount(Slides, {
            slots: {
                default: `
                <l-slides-item name="1">
                  <div class="box1">1</div>
                </l-slides-item>
                <l-slides-item name="2">
                  <div class="box2">2</div>
                </l-slides-item>
                <l-slides-item name="3">
                  <div class="box3">3</div>
                </l-slides-item>
              `
            },
            listeners: {
                "update:selected": val => {
                    wrapper.setProps({ selected: val });
                }
            }
        });
        wrapper.find('[data-action="next"]').trigger("click");
        setTimeout(() => {
            expect(wrapper.find(".box2").exists()).to.be.true;
            done();
        });
    });
});
