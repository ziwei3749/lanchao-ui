<!-- menu -->
<template>
    <div class="l-menu"
         :class="classStyle">
         
        <slot></slot>
        <div>{{namePath}}</div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},

  provide() {
    return {
      rootMenu: this
    };
  },

  props: {
    mode: {
      type: String,
      default: "vertical",
      validator(value) {
        return value === "horizontal" || value === "vertical";
      }
    },

    selected: {
      type: String,
      default: ""
    }
  },

  computed: {
    classStyle() {
      return `mode-${this.mode}`;
    }
  },

  data() {
    return {
      namePath: [] // 为了保存namePath的点击过的item的激活状态。css相关
    };
  },

  created() {},

  mounted() {},

  methods: {
    clickItem(name) {
      this.$emit("update:selected", name);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "var";
.l-menu {
  display: flex;
  border-bottom: 1px solid grey;
  color: $color;
  cursor: pointer;
  &.mode-vertical {
    flex-direction: column;
  }
  &.mode-horizontal {
    flex-direction: row;
  }
}
</style>
