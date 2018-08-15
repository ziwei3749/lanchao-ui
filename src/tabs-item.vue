<!-- tabs-item -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        name: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {},

    data() {
        return {};
    },

    created() {
        console.log("items created");
    },

    mounted() {},

    methods: {}
};
</script>
<style lang='scss'>
.tabs-item {
    // display: inline-block;
    // width: 200px;
    // height: 50px;
    // line-height: 50px;
    // text-align: center;
    // border-right: 1px solid #000;
    // &.tabs-item-active {
    //     color: red;
    // }
}
</style>