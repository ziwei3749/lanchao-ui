import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Pager from "../../src/pager/pager.vue";
import Icon from "../../src/icon.vue";
import Vue from "vue";

Vue.component("l-icon", Icon);

chai.use(sinonChai);

describe("Pager", () => {
    it("Pager存在.", () => {
        expect(Pager).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("test totalPage属性.", () => {
        const wrapper = mount(Pager, {
            propsData: {
                totalPage: 20,
                currentPage: 1
            }
        });
        const otherWrappers = wrapper.findAll( '.l-pager .other' );

        // 找在页面显示的最后一个页码，查看其是否为20
        const lastWrapper = otherWrappers.at( otherWrappers.length - 1 ) 
        expect(Number(lastWrapper.text())).to.equal(20)
    } );
    
    it( 'test currentPage属性.', () => {
        const wrapper = mount( Pager, {
            propsData: {
                totalPage: 20,
                currentPage: 10
            }
        } )
        const currentWrapper = wrapper.find( '.l-pager .current' )
        const currentPage = Number( currentWrapper.text() )
        expect(currentPage).to.equal(10)
    } )
    
    it( 'test hideIfOnePage属性', () => {
        const wrapper = mount( Pager, {
            propsData: {
                totalPage: 1,
                currentPage: 1,
                hideIfOnePage: true
            }
        } )
        let hasHideClass = wrapper.find( '.l-pager' ).contains( '.hide' )
        // 默认情况下hideIfOnePage为true，查看分页组件是否有类名hide
        
        expect(hasHideClass).to.equal(true)
    } )
    
    it( '测试 click 改变事件', (done) => {
        const wrapper = mount( Pager, {
            propsData: {
                totalPage: 10,
                currentPage: 5,
            },
            listeners: {
                "update:currentPage": page => {
                    expect(page).to.eq(6)
                    done();
                }
            }
        } )

        const nextWrapper = wrapper.find( '.l-pager .next' )
        nextWrapper.trigger( 'click' )
        
        
    })

});
