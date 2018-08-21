<!-- cascader-item -->
<template>
    <div class="l-cascader-item" >
        <div>{{sourceItem.name}}</div>
        <cascader-item v-for="item in sourceItem.children"
                        v-if="sourceItem.children"
                       :key="item.name"
                       :sourceItem="item">
        </cascader-item>
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
        // sourceItemhasChild(){
        //     return this.sourceItem.children.filter(item => {
        //         return item.children
        //     })
        // }
    },

    data() {
        return {};
    },

    created() {},

    mounted() {
        console.log(this.sourceItem)
    },

    methods: {}
};
</script>
<style lang='scss'>
.l-cascader-item {
}
</style>