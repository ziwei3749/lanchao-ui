<!-- menu-item -->
<template>
  <div class="l-menu-item"
       :data-name="name"
       :class="[{'active': isActive},{'vertical-active':verticalActive}]"
       @click="clickMenuItem">
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
      return (
        this.rootMenu.mode === "horizontal" &&
        this.name === this.rootMenu.selected
      );
    },
    verticalActive() {
      return (
        this.rootMenu.mode === "vertical" &&
        this.name === this.rootMenu.selected
      );
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
<style lang='scss' scoped>
@import "../styles/var";
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
  &.vertical-active {
    color: $blue;
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

a {
  text-decoration: none;
  color: inherit;
}
</style>
