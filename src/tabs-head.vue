<!-- tabs-header -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line"
         ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    inject: ["eventBus"],

    data() {
        return {};
    },

    mounted() {
            this.eventBus.$on("tab-click", (name, vm) => {
                let { width, left } = vm.$el.getClientRects()[0];
                // getClientRects  可以拿到矩形的一个位置信息
                this.$refs.line.style.left = `${left}px`;
                this.$refs.line.style.width = `${width}px`;
            });
    },

    methods: {}
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
$blue: blue;

.tabs-head {
    position: relative;
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border-bottom: 1px solid #ccc;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        transition: all 0.5s;
    }
    > .actions-wrapper {
        margin-left: auto;
        line-height: $tab-height;
        padding: 0 1em;
    }
}
</style>