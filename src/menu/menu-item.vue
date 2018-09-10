<!-- menu-item -->
<template>
  <div class="l-menu-item"  :class="{'active': isActive}" @click="clickMenuItem">
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
    clickMenuItem() {
      // 直接调用root组件的方法，触发selected的变化
      this.rootMenu.clickItem(this.name);
      // 每次点击时，都清空之前保存的namePath，namePath情况，之前的激活样式就清空了
      this.rootMenu.namePath = [];
      // 通知父元素，给自己加上isActive
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    }
  }
};
</script>
<style lang='scss'>
@import "../styles/var";
.l-menu-item {
  padding: 10px;
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
