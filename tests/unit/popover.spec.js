import Popover from "@/popover";
import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

describe("Popover", () => {
    it("存在.", () => {
        expect(Popover).to.be.ok;
    });

    it("设置position属性.", () => {
        const wrapper = mount(Popover, {
            slots: {
                default: { template: `<button>点我</button>` },
                content: "<div>弹出内容</div>"
            },
            propsData: {
                position: "bottom"
            }
        } );
        let button = wrapper.find("button")
        button.trigger( "click" );
        let contentWrapper = wrapper.find(".l-content-wrapper")
        let classes = contentWrapper.classes();
        expect(classes).to.include("l-position-bottom");
    });

    it( "设置trigger属性.", () => {
        const wrapper = mount(Popover, {
            slots: {
              default: {template: `<button>点我</button>`},
              content: '<div>弹出内容</div>'
            },
            propsData: {
              trigger: 'hover'
            }
          })
    
        expect(wrapper.find('.l-content-wrapper').element).to.not.exist
        wrapper.find('.l-popover').trigger('mouseenter')
        expect(wrapper.find('.l-content-wrapper').element).to.exist
    });
});
