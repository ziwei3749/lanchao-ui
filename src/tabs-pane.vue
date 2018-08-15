<!-- tabs-pane -->
<template>
    <div class="tabs-pane"
         v-show="isActive"
         :class="{'active':isActive}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    props: {
        name: {
            type: String
        }
    },

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

    methods: {}
};
</script>
<style lang='scss' scoped>
.tabs-pane {
    &.active {
        color: red;
    }
}
</style>