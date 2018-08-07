import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";

Vue.component("l-button", Button);
Vue.component("l-icon", Icon);
Vue.component("l-button-group", ButtonGroup);

new Vue({
    el: "#app",
    data: {
        loading: false
    }
});

// 单元测试

import chai from "chai";
import spies from "chai-spies";

chai.use(spies);

const expect = chai.expect;

{
    // 根据use的属性xlink:href是否为 #i-settings来判断icon显示是否正常
    const Constructor = Vue.extend(Button); // 创造一个构造器
    const vm = new Constructor({
        propsData: {
            // propsData只用于 new 创建实例时传递props，主要作用是方便测试
            icon: "settings"
        },
        template: `aaa`
    }); // 动态生成一个btn
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#i-settings");

    vm.$el.remove();
    vm.$destroy();
}

{
    // 根据use的属性xlink:href是否为 #i-loading来判断loading显示是否正常
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.eq("#i-loading");

    vm.$el.remove(); // 清理内存
    vm.$destroy(); // 注销组件
}

{
    // 根据svg的order属性是否为1，来判断是否是在left
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: "settings"
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");

    vm.$el.remove();
    vm.$destroy();
}

{
    // 根据svg的order属性是否为2，来判断是否是在right
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            iconPosition: "right"
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector("svg");
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");

    vm.$el.remove();
    vm.$destroy();
}

{
    // mock 使用chai-spies来监听函数
    // 来判断是否能监听到click
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: "settings",
            iconPosition: "right"
        }
    });
    vm.$mount();
    let spy = chai.spy(() => {});  // 间谍函数
    vm.$on( "click", spy );   // 监听间谍函数
    
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called()    // 期待button.click执行后，间谍函数被调用了


    vm.$el.remove();
    vm.$destroy();
}
