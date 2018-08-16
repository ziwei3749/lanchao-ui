<!-- tabs-header -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <transition name="fade">
      <div class="line"
           ref="line"></div>
    </transition>
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

    created() {
        this.eventBus.$on("tab-click", (name, vm) => {
            console.log(name);
            // getClientRects  可以拿到矩形的一个位置信息
            // this.$refs.line.style.left = vm.$el.getClientRects()[0].left

            this.$refs.line.style.left = vm.$el.getClientRects()[0].left + "px";
            console.log(vm.$el.getClientRects()[0].left);
        });
    },

    mounted() {},

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
    border: 1px solid red;
    > .line {
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        width: 84px;
        &.fade-enter-active,
        &.fade-leave-active {
            transition: opacity 0.5s;
        }
        &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
    > .actions-wrapper {
        margin-left: auto;
    }
}
</style>