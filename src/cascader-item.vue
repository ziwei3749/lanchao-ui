<!-- cascader-item -->
<template>
    <div class="l-cascader-item">
        <div>{{sourceItem.name}}</div>
        <div v-if="sourceItem.children">
            <cascader-item v-for="item in sourceItem.children"
                           :key="item.name"
                           :sourceItem="item">
            </cascader-item>
        </div>

    </div>
</template>

<script>
export default {
    name: "cascader-item",

    props: {
        sourceItem: {
            type: Object
        }
    },

    components: {},

    computed: {
 
    },

    data() {
        return {};
    },

    created() {},

    mounted() {
    },

    methods: {}
};
</script>
<style lang='scss'>
.l-cascader-item {
}
</style>