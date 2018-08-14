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
Vue.component( "l-sider", Sider );


new Vue({
    el: "#app",
    data: {
        loading: false,
        username: ""
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
});
