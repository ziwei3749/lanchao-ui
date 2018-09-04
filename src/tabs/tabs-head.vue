<!-- tabs-header -->
<template>
  <div class="l-tabs-head" ref="head">
    <slot></slot>
    <div class="l-line"
         ref="line"></div>
    <div class="l-actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "l-tabs-head",

  components: {},

  computed: {},

  inject: ["eventBus"],

  data() {
    return {};
  },

  mounted() {
    this.eventBus.$on("tab-click", (name, vm) => {
      this.updateLinePosition(vm);
    });
  },

  methods: {
    updateLinePosition(selectedVm) {
      // 因为line是相对head定位的，所以要求差值
      let { width, left } = selectedVm.$el.getBoundingClientRect();
      let { left: left2 } = this.$refs.head.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left - left2}px`;
    }
  }
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
$blue: #409eff;

.l-tabs-head {
  position: relative;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
  > .l-line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.5s;
  }
  > .l-actions-wrapper {
    margin-left: auto;
    line-height: $tab-height;
    padding: 0 1em;
  }
}
</style>
