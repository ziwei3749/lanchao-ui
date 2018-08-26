/**
 * 使用install比直接挂到Vue.protoype的好处有2
 *
 * 1 如果$toast方法跟用户自己的$toast有冲突，它可以不use，决定权在用户
 * 2 Vue是用户传给我们的，而不是我们自己引的，更可靠
 */

import Toast from "./toast.vue";

let currentToast;

export default {
  install(Vue) {
    Vue.prototype.$toast = (message, options) => {
      // 存在就销毁当前的toast,防止用户多次点击的
      if (currentToast) {
        currentToast.close();
      }

      // 用户点击了关闭的话，我们emit通知出来。因为用户点击了关闭，但currentToast还是有值的，需要设置为null，否则导致多一次close执行
      let onClose = () => {
        currentToast = null;
      };
      currentToast = createToast(Vue, message, options, onClose);
    };
  }
};

/**
 * helpers

 */
function createToast(Vue, message, options, onClose) {
  // 生成一个toast组件，然后生插入到body中

  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({ propsData: options });
  toast.$mount();
  toast.$slots.default = message; // 设置匿名插槽的内容，必须放到$mount前面
  console.log("toast1");
  console.log(toast);

  console.log("toast2");
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);

  return toast;
}
