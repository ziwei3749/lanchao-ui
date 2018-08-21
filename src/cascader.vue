<!-- cascader -->
<template>
    <div class="l-cascader">
        <div class="l-trigger"
             @click="togglePopover">
            <slot></slot>
        </div>
        <div class="l-popover"
             v-show="popoverVisible">
            <CascaderItems :items="source"></CascaderItems>
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
        }
    },

    computed: {
        level2Items() {
            return this.selectedItem1 ? this.selectedItem1.children : [];
        },

        level3Items() {
            return this.selectedItem2 ? this.selectedItem2.children : [];
        }
    },

    data() {
        return {
            popoverVisible: false,
            selectedItem1: null,
            selectedItem2: null,
            selectedItem3: null
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
.l-cascader {
    .l-trigger {
        border: 1px solid red;
        height: 32px;
        width: 100px;
    }
    .l-popover {
        display: flex;
        border: 1px solid #ccc;
        width: 480px;
        height: 200px;
        .level1 {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>