import Vue from "vue";
import Button from "./button.vue";

Vue.component("l-button", Button);

new Vue({
    el: "#app",
    data: {
        message: "hi"
    }
});
