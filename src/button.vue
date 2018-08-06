<!-- button -->
<template>
    <button class="l-button" :class="`icon-${iconPosition}`">
        <l-icon class="icon" v-if="icon" :name="icon"></l-icon>
        <div class="content">
            <slot />
        </div>
    </button>
</template>

<script>
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
        }
    },

    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
};
</script>
<style lang="scss">
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
}
</style>