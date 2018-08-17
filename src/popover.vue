<template>
    <div class="l-popover"
         @click.stop="showContent">
        <div class="content-wrapper"
             ref="contentWrapper"
             @click.stop
             v-show="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>

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
            if (this.visible === true) {
                let eventHandleClose = () => {
                    this.visible = false;
                    document.removeEventListener("click", eventHandleClose);
                };
                document.addEventListener("click", eventHandleClose);

                // 把contentWrapper移走，这样来解决父元素无法设置overflow:hidden的问题
                document.body.appendChild(this.$refs.contentWrapper);
                // 设置样式，需要获取到button的位置，所以套一个span
                // console.log(this.$refs.triggerWrapper.getBoundingClientRect());
                const {
                    top,
                    left
                } = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
                this.$refs.contentWrapper.style.top = top  +window.scrollY  +  "px";
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
}

.content-wrapper {
    position: absolute;
    border: 1px solid #000;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%)
}
</style>