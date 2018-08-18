<!-- collapse-item -->
<template>
    <div class="l-collapse-item">
        <div class="l-item-title"
             ref="LItemTitle"
             @click="triggerItemContent">
            <div>{{title}}</div>
            <div>></div>
        </div>
        <div>

        </div>
        <div class="l-item-content"
             v-if="showItemContent">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            showItemContent: false
        };
    },

    created() {},

    mounted() {},

    methods: {
        triggerItemContent() {
            this.showItemContent = !this.showItemContent;
        }
    }
};
</script>
<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.l-collapse-item {
    border-radius: $border-radius;
    .l-item-title {
        display: flex;
        justify-content: space-between;
        border-top: 5px solid $grey;
        min-height: 32px;
        padding: 0 8px;
        display: flex;
        align-items: center;
    }
    .l-item-content {
        padding: 8px;
    }
}
</style>