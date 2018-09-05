<!-- menu -->
<template>
    <div class="l-menu"
         :class="classStyle">
        <slot></slot>
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
      eventBus: new Vue()
    };
  },

  created() {},

  mounted() {},

  methods: {
    selectItem(name) {
      console.log(name);
      this.$emit("update:selected", name);
    }
  }
};
</script>
<style lang='scss' scoped>
.l-menu {
  display: flex;
  border: 1px solid red;
  &.mode-vertical {
    flex-direction: column;
  }
  &.mode-horizontal {
    flex-direction: row;
  }
}
</style>
