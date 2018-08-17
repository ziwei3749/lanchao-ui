<template>
    <div class="l-popover"
         @click="onClick">
        <div class="content-wrapper"
             ref="contentWrapper"
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
        positionContent() {
            /**
             * 把contentWrapper移走，这样来解决父元素无法设置overflow:hidden的问题
             * 设置样式，需要获取到button的位置，所以套一个span
             */

            document.body.appendChild(this.$refs.contentWrapper);
            const {
                top,
                left
            } = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
            this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
        },

        listenToDocument() {
            let eventHandleClose = event => {
                if (this.$refs.contentWrapper.contains(event.target)) {
                    // document的点击事件，判断如果点击的区域是contentWrapper，什么都不做
                    return;
                } else if (this.$refs.triggerWrapper.contains(event.target)) {
                    // document的点击事件，判断如果点击的区域是button，就只移除监听器
                    document.removeEventListener("click", eventHandleClose);
                } else {
                    // 如果点击了非popover的区域就关闭,并且remove event
                    this.visible = false;
                    document.removeEventListener("click", eventHandleClose);
                }
            };

            document.addEventListener("click", eventHandleClose);
        },

        onShow() {
            this.$nextTick(() => {
                this.positionContent(); // 移动到body下，避免被overflow:hidden
                this.listenToDocument(); // 监听document的click事件，做判断
            });
        },

        onClick(event) {
            // 不是去阻止事件冒泡，而是根据event.target判断用户的点击区域如果是button，那么就执行逻辑
            if (this.$refs.triggerWrapper.contains(event.target)) {
                this.visible = !this.visible;
                if (this.visible === true) {
                    this.onShow();
                }
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
    transform: translateY(-100%);
}
</style>