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
        selected: {
            type: Array
        },
        single: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            eventBus: new Vue()
        };
    },

    mounted() {
        /**
         * 数据操作全部集中到放到父组件。
         */
        
        this.eventBus.$emit("update:selected",this.selected) // 初始化通知子组件，默认状态

        this.eventBus.$on("update:addSelected", name => {
            // console.log(`add:${name}`)
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            // console.log("selectedCopy",selectedCopy)
             if(this.single){
                selectedCopy = [name]
            }else{
                selectedCopy.push(name);
            }
            this.eventBus.$emit("update:selected", selectedCopy); // 通知子组件数据变化
            this.$emit("update:selected", selectedCopy);  // 通知父组件数据变化
        });
        this.eventBus.$on("update:removeSelected", name => {
            // console.log(`remove:${name}`)
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            let index = selectedCopy.indexOf(name);
            selectedCopy.splice(index, 1);

            this.eventBus.$emit("update:selected", selectedCopy); // 通知子组件数据变化
            this.$emit("update:selected", selectedCopy);  // 通知父组件数据变化
        });
    },

    methods: {}
};
</script>
<style lang='scss' scoped>
$grey: #ddd;
$border-radius: 4px;
.l-collapse {
    border-radius: $border-radius;
    border-left: 1px solid $grey;
    border-right: 1px solid $grey;
    border-bottom: 1px solid $grey;
}
</style>