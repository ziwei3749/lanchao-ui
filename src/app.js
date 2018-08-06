import Vue from "vue";
import Button from "./button.vue";
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component("l-button", Button);
Vue.component('l-icon',Icon)
Vue.component('l-button-group',ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading: false
    }
});
