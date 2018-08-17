<!-- tabs -->
<template>
    <div class="l-tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    components: {},

    computed: {},

    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: "horizontal",
            validator(value) {
                return ["horizontal", "vertical"].indexOf(value) >= 0;
            }
        }
    },

    data() {
        return {
            eventBus: new Vue()
        };
    },

    provide() {
        return {
            // provide里的东西，它的所有子孙都可以得到
            eventBus: this.eventBus
        };
    },

    created() {
        this.eventBus.$on("tab-click", val => {
            this.$emit("tab-click", val);
        });
    },

    mounted() {
        this.checkChildren();
        // 初始化时，用户传进来的默认值，对应的tab-item需要通知子孙
        this.$children.forEach(vm => {
            if (vm.$options.name === "l-tabs-head") {
                vm.$children.forEach(itemVm => {
                    if (
                        itemVm.name == this.selected &&
                        itemVm.$options.name === "l-tabs-item"
                    ) {
                        // 初始化时，用户传进来的默认值，tabs需要通知子孙
                        this.eventBus.$emit("tab-click", this.selected, itemVm);
                    }
                });
            }
        });
    },

    methods: {
        checkChildren() {
            if (this.$children.length === 0) {
                console &&
                    console.warn &&
                    console.warn(
                        "tabs的子组件应该是tabs-head和tabs-body，但是你没有写子组件"
                    );
            }
        }
    }
};
</script>
<style lang='scss' scoped>
.l-tabs {
}
</style>