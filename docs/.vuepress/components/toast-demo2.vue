<!-- button-demos -->
<template>
    <div style="margin: 40px 0">
        <l-button @click="close">自定义CloseBtn</l-button>
    </div>
</template>

<script>
import plugin from "../../../src/plugin";
import Button from "../../../src/button/button";
import Vue from "vue";

Vue.use(plugin);

export default {
    components: {
        "l-button": Button
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {
        close() {
            this.$toast(
                `啦啦啦😝${Math.random() * 100}`,
                {
                    enableHtml: false,
                    autoClose: false,
                    position: "top",
                    closeButton: {
                        text: "关闭",
                        callback: toast => {
                            console.log("用户的do something");
                            console.log(toast); //组件在callback时把实例交给用户
                        }
                    }
                }
            );
        }
    }
};
</script>
<style lang='scss'>
.l-toast {
    z-index: 20;
}
</style>