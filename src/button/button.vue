<!-- button -->
<template>
  <button class="l-button"
          :class="iconClasses"
          @click="$emit('click')">
    <l-icon class="l-icon l-loading"
            v-if="loading"
            name="loading"></l-icon>
    <l-icon class="l-icon"
            v-if="icon && loading !== true"
            :name="icon"></l-icon>
    <div class="l-content">
      <slot />
    </div>
  </button>
</template>

<script>
// 使用局部组件icon
import Icon from "../icon.vue";

export default {
  name: "l-button",
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 属性检查器
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  components: {
    "l-icon": Icon
  },

  computed: {
    iconClasses() {
      let classesArray = [`l-icon-${this.iconPosition}`];
      if (this.disabled) {
        classesArray.push(`l-icon-disabled`);
      }
      return classesArray;
    }
  },

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
// @import "../styles/var.scss";
@import "../styles/var.scss";

.l-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: $button-height;
  font-size: $font-size;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .l-icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .l-content {
    order: 2;
  }

  &.l-icon-right {
    > .l-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .l-content {
      order: 1;
    }
  }
  &.l-icon-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  > .l-loading {
    animation: spin 2s infinite linear;
  }
}
</style>
