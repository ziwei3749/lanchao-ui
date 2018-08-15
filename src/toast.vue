!<!-- toast -->
<template>
    <div class="l-toast"
         :class="toastClasses"
         ref="toast">
        <div class="l-message">
            <slot v-if="!enableHtml"></slot>
            <div v-else
                 v-html="$slots.default"></div>
        </div>

        <span class="l-line"
              ref="line"></span>
        <span v-if="closeButton"
              class="l-close-btn"
              @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
/**
 *  状态
 *  - 弹出toast
 *  - 自动关闭 -> 设置n秒后自动关闭
 *  - 点击后关闭 -> 回调
 *  - 快速点击的话，只显示最后一个，保证只有一个toast (可选 允许多个toast) (如果出现多个，就在通过一个地方多次出现)
 *  - 是否要给一个接口，允许设置宽高呢？ 不需要，让用户自己写css
 */
export default {
    components: {},

    computed: {
        toastClasses() {
            return `l-position-${this.position}`;
        }
    },

    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 2000,
            validator(value) {
                // autoClose不是false就是数字
                return value === false || typeof value === "number";
            }
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: "close",
                    callback: undefined
                };
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "middle", "bottom"].indexOf(value) >= 0;
            }
        }
    },

    data() {
        return {};
    },

    created() {},

    mounted() {
        this.updateStyles();
        this.execAutoClose();
    },

    methods: {
        updateStyles() {
            // 用js获取dom的高度，因为父元素用min-height，我们拿不到高度
            this.$nextTick(() => {
                this.$refs.line.style.height =
                    this.$refs.toast.getBoundingClientRect().height + "px";
            });
        },

        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoClose);
            }
        },

        close() {
            this.$el.remove();
            this.$emit("close");
            this.$destroy();
        },
        onClickClose() {
            // 首先关闭
            this.close();
            // 其次执行用户的关闭逻辑，如果有的话
            if (
                this.closeButton.callback &&
                typeof this.closeButton.callback === "function"
            ) {
                this.closeButton.callback(this); // 让callback可以得到toast实例，也可以不用
            }
        }
    }
};
</script>
<style lang='scss' scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translate(-50%, 100%);
    }
    100% {
        opacity: 100%;
        transform: translate(-50%, 0%);
    }
}

@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
    100% {
        opacity: 100%;
        transform: translate(-50%, 0%);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}

$animation-duration: 0.4s;

.l-toast {
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 50%;

    color: #fff;
    padding-left: 16px;
    .l-message {
        padding: 8px 0;
        width: 200px;
    }
    .l-line {
        border-right: 1px solid rgba(102, 102, 102, 1);
        height: 100%;
        margin-left: 16px;
    }
    .l-close-btn {
        padding: 0 16px;
        height: $toast-min-height;
        line-height: $toast-min-height;
        flex-shrink: 0;
    }
    &.l-position-top {
        top: 0;
        transform: translateX(-50%);
        animation: slide-down $animation-duration;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    &.l-position-bottom {
        bottom: 0;
        transform: translateX(-50%);
        animation: slide-up $animation-duration;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    &.l-position-middle {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: fade-in $animation-duration;
    }
}
</style>