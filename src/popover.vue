<template>
    <div class="l-popover"
         ref="popover"
         @click="onClick">
        <div class="content-wrapper"
             :class="`position-${position}`"
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

    props: {
        position: {
            type: String,
            defualt: "top",
            validator(value) {
                return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
            }
        },

        trigger: {
            type: String,
            default: "click",
            validator(value) {
                return ["click", "hover"].indexOf(value) >= 0;
            }
        }
    },

    computed: {
        openEvent() {},
        closeEvent() {}
    },

    data() {
        return {
            visible: false
        };
    },

    created() {},

    mounted() {
        if (this.trigger === "click") {
            this.$refs.popover.addEventListener("click", this.onClick);
        } else {
            this.$refs.popover.addEventListener("mouseenter", this.open);
            this.$refs.popover.addEventListener("mouseleave", this.close);
        }
    },
    destroyed() {
        /**
         *  因为这个click是js原生的，而不是vue的，所以销毁组件时，自己要主要删除事件
         */
        if (this.trigger === "click") {
            this.$refs.popover.removeEventListener("click", this.onClick);
        } else {
            this.$refs.popover.removeEventListener("mouseenter", this.open);
            this.$refs.popover.removeEventListener("mouseleave", this.close);
        }
    },

    methods: {
        positionContent() {
            /**
             * 把contentWrapper移走，这样来解决父元素无法设置overflow:hidden的问题
             * 设置样式，需要获取到button的位置，所以套一个span
             */
            const { contentWrapper, triggerWrapper } = this.$refs;
            document.body.appendChild(contentWrapper);
            const {
                top,
                left,
                bottom,
                right,
                height,
                width
            } = triggerWrapper.getBoundingClientRect();
            let { height: height2 } = contentWrapper.getBoundingClientRect();

            // if嵌套  ==> switch case  ==> 表驱动编程
            let positionsMap = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX
                },
                bottom: {
                    top: top + window.scrollY + height,
                    left: left + window.scrollX
                },
                right: {
                    top: top + window.scrollY - (height2 - height) / 2,
                    left: left + window.scrollX + width
                },
                left: {
                    top: top + window.scrollY - (height2 - height) / 2,
                    left: left + window.scrollX
                }
            };

            contentWrapper.style.top = positionsMap[this.position].top + "px";
            contentWrapper.style.left = positionsMap[this.position].left + "px";
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
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all; // 英文网站最好不要加这个
    &::before,
    &::after {
        content: "";
        display: block;
        width: 0px;
        height: 0px;
        border: 10px solid transparent;
        position: absolute;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before {
            border-top-color: black;
            top: 100%;
            left: 10px;
        }
        &::after {
            border-top-color: #fff;
            top: calc(100% - 1px);
            left: 10px;
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before {
            border-bottom-color: black;
            bottom: 100%;
            left: 10px;
        }
        &::after {
            border-bottom-color: #fff;
            bottom: calc(100% - 1px);
            left: 10px;
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before {
            border-right-color: black;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
        &::after {
            border-right-color: #fff;
            right: calc(100% - 1px);
            top: 50%;
            transform: translateY(-50%);
        }
    }
    &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before {
            border-left-color: black;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
        &::after {
            border-left-color: #fff;
            left: calc(100% - 1px);
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>