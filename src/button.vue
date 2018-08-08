<!-- button -->
<template>
    <button class="l-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
        <l-icon class="icon loading" v-if="loading" name="loading"></l-icon>
        <l-icon class="icon" v-if="icon && loading !== true" :name="icon"></l-icon>
        <div class="content">
            <slot />
        </div>
    </button>
</template>

<script>
// 使用局部组件icon
import Icon from "./icon.vue";

export default {
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
<style lang="scss">
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
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
        border-color: var(--border-color-hover);
    }

    &:active {
        background-color: var(--button-active-bg);
    }

    &:focus {
        outline: none;
    }

    > .icon {
        order: 1;
        margin-right: 0.3em;
    }
    > .content {
        order: 2;
    }

    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: 0.3em;
        }
        > .content {
            order: 1;
        }
    }
    > .loading {
        animation: spin 2s infinite linear;
    }
}
</style>