<!-- menu-item -->
<template>
  <div class="l-menu-item"  :class="{'active': isActive}" @click="selectMenuItem">
      <slot></slot>
  </div>
</template>

<script>
export default {
  //   inject: ["eventBus"],
  inject: ["rootMenu"],

  props: {
    name: {
      type: String,
      required: true
    }
  },

  components: {},

  computed: {
    isActive() {
      return this.name === this.rootMenu.selected;
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    selectMenuItem() {
      // 直接调用rootMenu组件的方法，emit触发selected的变化
      this.rootMenu.selectItem(this.name);
    }
  }
};
</script>
<style lang='scss'>
@import "var";
.l-menu-item {
  padding: 10px 20px;
  position: relative;
  &.active {
    color: $blue;
    &::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
}
.l-sub-menu .l-menu-item {
  &.active {
    color: $blue;
    background: fade_out(#409eff, 0.9);
    &::after {
      display: none;
    }
  }
}
</style>
