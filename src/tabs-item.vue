<!-- tabs-item -->
<template>
    <div class="tabs-item"
         :class="{'active':isActive}"
         @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        name: {
            type: String | Number,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {},

    data() {
        return {
            isActive: false
        };
    },

    inject: ["eventBus"],

    created() {
        this.eventBus.$on("tab-click", name => {
            this.isActive = name === this.name;
        });
    },

    mounted() {},

    methods: {
        xxx() {
            this.eventBus.$emit("tab-click", this.name);
        }
    }
};
</script>
<style lang='scss' scoped>
.tabs-item {
    display: flex;
    align-items: center;
    padding: 0 2em;
    flex-shrink: 0;
    height: 100%;
    cursor: pointer;
    border: 1px solid #ccc;
    &.active {
        color: red;
    }
}
</style>