<!-- cascader -->
<template>
    <div class="l-cascader">
        <div class="l-trigger"
             @click="togglePopover">
            <slot></slot>
        </div>
        <div class="l-popover-wrapper"
             v-show="popoverVisible">
            <CascaderItems :items="source"
                           class="popover"
                           :popoverHeight="popoverHeight"
                           :style="{height: popoverHeight}">
            </CascaderItems>
        </div>
    </div>
</template>

<script>
import CascaderItems from "./cascader-items.vue";
export default {
    components: {
        CascaderItems
    },

    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        }
    },

    computed: {},

    data() {
        return {
            popoverVisible: true
        };
    },

    created() {},

    mounted() {},

    methods: {
        togglePopover() {
            this.popoverVisible = !this.popoverVisible;
        }
    }
};
</script>
<style lang='scss' scoped>
@import 'var.scss';
.l-cascader {
    position: relative;
    .l-trigger {
        border: 1px solid #000;
        height: 32px;
        width: 100px;
    }
    .l-popover-wrapper {
        position: absolute;
        background: #fff;
        top: 100%;
        left: 0;
        display: flex;
        @extend .box-shadow ;
        .level1 {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>