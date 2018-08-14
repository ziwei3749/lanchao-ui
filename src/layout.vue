!<!-- layout -->
<template>
    <div class="layout"
         :style="layoutStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
    components: {},

    computed: {
        layoutStyle() {
            return {
                flexDirection: this.direction,
                height: this.height
            };
        }
    },

    props: {
        height: {
            type: String
        }
   
    },

    data() {
        return {
            direction : ""
        };
    },

    created() {},

    mounted() {
        // 核心就是根据是否有sider组件来判断，自动检测flex-direction的值
        let hasSilder = false
        this.$children.forEach(child => {
            console.log(child.$options.name)
            if(child.$options.name === 'l-sider'){
                hasSilder = true
            }
        })
        this.direction = hasSilder ? 'row' : 'column'
    },

    methods: {}
};
</script>
<style lang='scss' scoped>
.layout {
    //如果layout也是子元素的话，flex-grow:1
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
</style>