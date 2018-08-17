<template>
    <div class="l-popover"
         @click="onClick">
        <div class="content-wrapper"
             ref="contentWrapper"
             v-show="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper"
              style="display: inline-block">
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

        onClickOtherDocument(event) {
            /**
             * 如果你点击的是content区域，就什么都不做。 如果点击btn的话，会触发close，close里remove了document的监听，所有只会remove一次
             * 如果点击了other的document的区别，就close
             */
            if (this.$refs.contentWrapper.contains(event.target)) return;
            this.close();
        },

        open() {
            this.visible = true;
            this.$nextTick(() => {
                this.positionContent(); // 移动到body下，避免被overflow:hidden
                document.addEventListener("click", this.onClickOtherDocument); // 监听document的click事件，做判断
            });
        },

        close() {
            this.visible = false;
            document.removeEventListener("click", this.onClickOtherDocument);
        },

        onClick(event) {
            // 不是去阻止事件冒泡，而是根据event.target判断用户的点击区域如果是button，那么就执行逻辑
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible === true) {
                    this.close();
                } else {
                    this.open();
                }
            }
        }
    }
};
</script>
<style lang='scss' scoped>
$border-color: #333;
$border-radius: 4px;
.l-popover {
    display: inline-block;
    position: relative;
    vertical-align: top;
}

.content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: #fff;
    // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
    padding: 0.5em 1em;
    margin-top: -10px;
    max-width: 20em;
    // 英文网站最好不要加这个
    word-break: break-all;
    &::before,
    &::after {
        content: "";
        display: block;
        width: 0px;
        height: 0px;
        border: 10px solid transparent;
        position: absolute;
        left: 10px;
    }
    &::before {
        border-top-color: $border-color;

        top: 100%;
    }
    &::after {
        border-top-color: #fff;
        top: calc(100% - 1px);
    }
}
</style>