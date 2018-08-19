<!-- collapse -->
<template>
    <div class="l-collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    provide() {
        return {
            eventBus: this.eventBus
        };
    },

    components: {},

    computed: {},

    props: {
        active: {
            type: String | Array
        },
        single: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            eventBus: new Vue(),
            activeItemArray: []
        };
    },

    created() {
        /**
         * 监听子组件的clickItem，并且将监听到的结果触发给父组件
         */
        this.emitChange();
    },

    mounted() {
        /**
         * 在mounted里触发事件，来通知所有子组件init，用户传的props值
         */
        
        this.eventBus.$emit("initActive", {
            active : this.active,
            single : this.single
        });
    },

    methods: {
        emitChange() {
            this.eventBus.$on("clickItem", currentVm => {
                if (this.single) {
                    let name = currentVm.showItemContent ? currentVm.name : "";
                    this.$emit("change", name);
                } else {
                    this.activeItemArray = this.$children
                        .filter(vm => {
                            return vm.showItemContent;
                        })
                        .map(vm => {
                            return vm.name;
                        });
                    this.$emit("change", this.activeItemArray);
                }
            });
        }
    }
};
</script>
<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.l-collapse {
    border-radius: $border-radius;
    border-left: 5px solid $grey;
    border-right: 5px solid $grey;
    border-bottom: 5px solid $grey;
}
</style>