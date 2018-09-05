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
.l-menu-item {
  padding: 10px 20px;
  &.active {
    color: red;
  }
}
</style>
