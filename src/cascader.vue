<!-- cascader -->
<template>
    <div class="l-cascader">
        <div class="l-trigger"
             @click="togglePopover">
            <slot></slot>
        </div>
        <div class="l-popover"
             v-show="popoverVisible">
            <div class="level1">
                <div v-for="item1 in source"
                     :key="item1.name"
                     @click="selectedItem1 = item1; selectedItem2=null">
                    <div>{{item1.name}}</div>
                </div>
            </div>

            <div class="level2">
                <div v-for="item2 in level2Items"
                     @click="selectedItem2 = item2"
                     :key="item2.name">
                    <div>{{item2.name}}</div>
                </div>
            </div>

            <div class="level3">
                <div v-for="item3 in level3Items"
                     :key="item3.name">
                    <div>{{item3.name}}</div>
                </div>
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