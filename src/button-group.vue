<!-- button-group -->
<template>
    <div class="l-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName !== "BUTTON") {
        console.warn(
          `l-button-group的子元素必须都为button，而你的是${node.nodeName}`
        );
      }
    }
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.l-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .l-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
