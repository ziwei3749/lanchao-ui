import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from './input.vue'

Vue.component("l-button", Button);
Vue.component("l-icon", Icon);
Vue.component("l-button-group", ButtonGroup);
Vue.component( "l-input", Input );


new Vue({
    el: "#app",
    data: {
        loading: false,
        username: ''
    },
    methods: {
        fn() {
            console.log('触发了')
        }
    }
});


