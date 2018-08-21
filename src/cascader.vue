<!-- cascader -->
<template>
    <div class="l-cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="sourceItem in source"
                 :key="sourceItem.name">
                <cascader-item :sourceItem="sourceItem"></cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from "./cascader-item.vue";
export default {
    components: {
        "cascader-item": CascaderItem
    },

    props: {
        source: {
            type: Array
        }
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
.l-cascader {
}
</style>