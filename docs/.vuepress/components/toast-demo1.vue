<!-- button-demos -->
<template>
    <div style="margin: 40px 0">
        <l-button @click="$toast('点击弹出提示')">上方弹出</l-button>
        <l-button @click="$toast('点击弹出提示',{position:'middle'})">中间弹出</l-button>
        <l-button @click="$toast('点击弹出提示',{position:'bottom'})">下方弹出</l-button>
    </div>
</template>

<script>
import plugin from "../../../src/plugin";
import Button from "../../../src/button/button";
import Vue from "vue";

Vue.use(plugin);

export default {
    components: {
        "l-button": Button,
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {
     
    }
};
</script>
<style lang='scss'>
.l-toast {
    z-index: 20  ; 
}
</style>