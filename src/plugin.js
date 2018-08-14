/**
 * 使用install比直接挂到Vue.protoype的好处有2
 *
 * 1 如果$toast方法跟用户自己的$toast有冲突，它可以不use，决定权在用户
 * 2 Vue是用户传给我们的，而不是我们自己引的，更可靠
 */

import Toast from "./toast";
export default {
    install(Vue) {
        Vue.prototype.$toast = (message, options) => {
            // 生成一个toast组件，然后生插入到body中
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: options
            });
            toast.$slots.default = message; // 设置匿名插槽的内容，必须放到$mount前面
            toast.$mount();

            document.body.appendChild(toast.$el);
        };
    }
};
