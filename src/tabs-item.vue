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
        this.eventBus.$on("update:selected", name => {
            this.isActive = name === this.name;
        });
    },

    mounted() {},

    methods: {
        xxx() {
            this.eventBus.$emit("update:selected", this.name);
        }
    }
};
</script>
<style lang='scss' scoped>
.tabs-item {
    padding: 0 2em;
    flex-shrink: 0;
    &.active {
        color: red;
    }
}
</style>