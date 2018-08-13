!<!--  -->
<template>
    <div class="row"
         :style="{'marginLeft': `-${gutter/2}px` , 'marginRight': `-${gutter/2}px`}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        gutter: {
            type: [Number, String]
        }
    },
    data() {
        return {};
    },

    components: {},

    computed: {},

    created() {
        // created时没有子组件
        // console.log(this.$children)
        /**
         * 区别created 和 mounted的区别
         * created类似于 document.createElement('div') 在内存中生成这个对象，但是并没有挂在到页面里面
         * mounted类似于 append 是把div挂载到body上
         */
        /**
         * vue在有父子关系时，
         * created 父组件
         * created 子组件
         * mounted 子组件
         * mounted 父组件
         */
    },

    mounted() {
        console.log(this.gutter);
        this.$children.forEach(vm => {
            vm.gutter = this.gutter;
        });
    },

    methods: {}
};
</script>
<style scoped lang="scss">
.row {
    display: flex;
}
</style>