<!-- tabs-item -->
<template>
    <div class="tabs-item"
         :class="[{'active':isActive},{'disabled': disabled}]"
         @click="emitClick">
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
        emitClick() {
            if (this.disabled) return;
            this.eventBus.$emit("tab-click", this.name, this);
        }
    }
};
</script>
<style lang='scss' scoped>
$blue: blue;
$disabled-text-color: #ccc;
.tabs-item {
    display: flex;
    align-items: center;
    padding: 0 2em;
    flex-shrink: 0;
    height: 100%;
    cursor: pointer;
    &.active {
        color: $blue;
        font-weight: bold;
    }
    &.disabled {
        color: $disabled-text-color;
        cursor: not-allowed;
    }
}
</style>