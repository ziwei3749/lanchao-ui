import Vue from "vue";
import Button from "./button.vue";
import Icon from './icon.vue'

Vue.component("l-button", Button);
Vue.component('l-icon',Icon)

new Vue({
    el: "#app",
    data: {
        loading: false
    }
});
