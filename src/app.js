import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import Content from "./content.vue";
import Sider from "./sider.vue";
import Toast from "./toast.vue";
import plugin from "./plugin.js";

Vue.component("l-button", Button);
Vue.component("l-icon", Icon);
Vue.component("l-button-group", ButtonGroup);
Vue.component("l-input", Input);
Vue.component("l-row", Row);
Vue.component("l-col", Col);
Vue.component("l-layout", Layout);
Vue.component("l-header", Header);
Vue.component("l-footer", Footer);
Vue.component("l-content", Content);
Vue.component("l-sider", Sider);
Vue.component("l-toast", Toast);

Vue.use(plugin);

new Vue({
    el: "#app",
    data: {
        loading: false,
        username: ""
    },
    created() {},
    methods: {
        showToast() {
            this.$toast( "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", {
                enableHtml: true,
                autoClose: false,
                autoCloseDelay: 1,
                position: "middle",
                closeButton: {
                    text: "关闭",
                    callback: (toast) => {
                        console.log( "用户的do something" );
                        console.log(toast)   //组件在callback时把实例交给用户
                    }
                }
            });
        }
    }
});
