<!-- button -->
<template>
    <button class="l-button"
            :class="`l-icon-${iconPosition}`"
            @click="$emit('click')">
        <l-icon class="l-icon l-loading"
                v-if="loading"
                name="loading"></l-icon>
        <l-icon class="l-icon"
                v-if="icon && loading !== true"
                :name="icon"></l-icon>
        <div class="l-content">
            <slot />
        </div>
    </button>
</template>

<script>
// 使用局部组件icon
import Icon from "./icon.vue";

export default {
    name: "l-button",
    props: {
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: "left",
            validator(value) {
                // 属性检查器
                return value === "left" || value === "right";
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {};
    },

    components: {
        "l-icon": Icon
    },

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
    to {
        transform: rotate(0deg);
    }
    from {
        transform: rotate(360deg);
    }
}
.l-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: $button-height;
    font-size: $font-size;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    &:hover {
        border-color: $border-color-hover;
    }

    &:active {
        background-color: $button-active-bg;
    }

    &:focus {
        outline: none;
    }

    > .l-icon {
        order: 1;
        margin-right: 0.3em;
    }
    > .l-content {
        order: 2;
    }

    &.l-icon-right {
        > .l-icon {
            order: 2;
            margin-right: 0;
            margin-left: 0.3em;
        }
        > .l-content {
            order: 1;
        }
    }
    > .l-loading {
        animation: spin 2s infinite linear;
    }
}
</style>