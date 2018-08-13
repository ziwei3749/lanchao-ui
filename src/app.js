import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component("l-button", Button);
Vue.component("l-icon", Icon);
Vue.component("l-button-group", ButtonGroup);
Vue.component( "l-input", Input );
Vue.component( "l-row", Row );
Vue.component( "l-col", Col );


new Vue({
    el: "#app",
    data: {
        loading: false,
        username: ''
    },
    methods: {
      inputChange(e){
          console.log(e.target.value)
      }
    }
});


