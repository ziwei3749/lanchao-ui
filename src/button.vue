<!-- button -->
<template>
    <button class="l-button" :class="`icon-${iconPosition}`">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
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
            default: "left"
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
        margin-right: .3em;
    }
    > .content {
        order: 2;
    }

    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
        > .content {
            order: 1;
        }
    }
}
</style>