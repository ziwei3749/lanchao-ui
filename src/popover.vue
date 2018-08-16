<!-- popover -->
<template>
    <div class="l-popover"
         @click.stop="showContent">
        <div class="content-wrapper"
             @click.stop
             v-if="visible">
            <slot name="content"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    data() {
        return {
            visible: false
        };
    },

    created() {},

    mounted() {},

    methods: {
        showContent() {
            this.visible = !this.visible;
            if (this.visible) {
                let eventHandleClose = () => {
                    this.visible = false;
                    console.log("document 隐藏");
                    document.removeEventListener("click", eventHandleClose);
                };
                document.addEventListener("click", eventHandleClose);
            } else {
                console.log("vm 隐藏");
            }
        }
    }
};
</script>
<style lang='scss' scoped>
.l-popover {
    display: inline-block;
    position: relative;
    vertical-align: top;
    .content-wrapper {
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid #000;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
}
</style>