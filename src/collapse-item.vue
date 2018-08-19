<!-- collapse-item -->
<template>
    <div class="l-collapse-item">
        <div class="l-item-title"
             :data-name="name"
             @click="toggleItem">
            <div>{{title}}</div>
            <div>></div>
        </div>

        <div class="l-item-content"
             v-if="showItem">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
    inject: ["eventBus"],

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
            showItem: false,
            single: false
        };
    },

    mounted() {
        // 子组件的显示隐藏，只在这一个地方会进行设置
        this.eventBus.$on("update:selected", selected => {
            if (selected.includes(this.name)) {
                this.showItem = true;
            } else {
                this.showItem = false;
            }
        });
    },

    methods: {
        toggleItem() {
            if (this.showItem) {
                this.eventBus.$emit("update:removeSelected", this.name);
            } else {
                this.eventBus.$emit("update:addSelected", this.name);
            }
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
        border-top: 1px solid $grey;
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