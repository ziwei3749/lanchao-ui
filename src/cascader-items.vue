<!-- cascader-item -->
<template>
    <div class="l-cascader-items">
        <div class="left">
            <div v-for="item in items"
                 :key="item.name"
                 class="label"
                 @click="leftSelected = item">
                <span>{{item.name}}</span>
                <l-icon v-if="item.children" name="right" class="icon"></l-icon>
            </div>
        </div>

        <div class="right"
             v-if="rightItems">
            <CascaderItems :items="rightItems"
                           :popoverHeight="popoverHeight"
                           :style="{height: popoverHeight}">
            </CascaderItems>
        </div>

    </div>
</template>

<script>
export default {
    name: "CascaderItems",

    props: {
        items: {
            type: Array
        },
        popoverHeight: {
            type: String
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
@import 'var.scss';
.l-cascader-items {
    height: 200px;
    display: flex;
    .left {
        height: 100%;
        padding: .3em 0;
        .label {
            padding: .3em 1em;
            display: flex;
            align-items: center;
            .icon {
                margin-left: 1em;
                transform: scale(.5)
            }
        }
    }
    .right {
        height: 100%;
        border-left: 1px solid $border-color;
    }
}
</style>