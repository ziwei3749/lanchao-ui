<!-- cascader-item -->
<template>
    <div class="l-cascader-items">
        <div class="left">
            <div v-for="item in items"
                 :key="item.name"
                 @click="leftSelected = item">
                <div>{{item.name}}</div>
            </div>
        </div>

        <div class="right"
             v-if="rightItems">
            <CascaderItems :items="rightItems"></CascaderItems>
        </div>

    </div>
</template>

<script>
export default {
    name: "CascaderItems",

    props: {
        items: {
            type: Array
        }
    },

    components: {},

    computed: {
        rightItems() {
            return this.leftSelected && this.leftSelected.children
                ? this.leftSelected.children
                : null;
        }
    },

    data() {
        return {
            leftSelected: null
        };
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss'>
.l-cascader-items {
    display: flex;
    .left {
        border: 1px solid red
    }
}
</style>