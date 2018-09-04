const expect = chai.expect;
import Vue from "vue";
import Row from "../src/grid/row";
import Col from "../src/grid/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
    it("存在.", () => {
        expect(Row).to.be.ok; // 不是Undefined null 0 '' 就是ok
    });

    it("接受gutter属性.", done => {
        Vue.component("l-row", Row);
        Vue.component("l-col", Col);
        const div = document.createElement("div");
        const html = `
            <l-row gutter="20">
                <l-col span="12"></l-col>
                <l-col span="12"></l-col>
            </l-row>
        `;
        document.body.appendChild(div);
        div.innerHTML = html;
        const vm = new Vue({
            el: div
        });
        setTimeout(() => {
            let row = vm.$el.querySelector(".l-row");
            expect(getComputedStyle(row).marginLeft).to.equal("-10px");
            expect(getComputedStyle(row).marginRight).to.equal("-10px");
            let cols = vm.$el.querySelectorAll(".l-col");
            expect(getComputedStyle(cols[0]).paddingLeft).to.equal("10px");
            expect(getComputedStyle(cols[1]).paddingRight).to.equal("10px");
            // console.log( vm.$el.outerHTML );
            // mounted和created是异步的，所以第一次打印不出padding-left的值，放到setTimeout里
            done();
            // 在mocha是支持测试异步代码的，但是需要用参数里加一个done，然后在异步成功时调用done()，否则会直接pass
            // mocha的约定，不写done就默认全是同步代码。写了done是告诉测试代码你有异步的代码

            div.remove()
            vm.$destroy();
            // 销毁vue实例，也得放到异步setTimeout内
        });
    });

    it( "接受align", () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: "center"
            }
        }).$mount(div);

        expect(vm.$el.classList.contains("align-center")).to.equal(true);
        expect( getComputedStyle( vm.$el ).justifyContent ).to.equal( 'center' );
        // 不挂在到页面里，css就没有值
        div.remove()
        vm.$destroy();
    });
});
