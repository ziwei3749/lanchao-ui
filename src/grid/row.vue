!<!--  -->
<template>
    <div class="l-row"
         :class="rowClass"
         :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }
  },

  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`
      };
    },
    rowClass() {
      let { align } = this;

      return align && `align-${align}`;
    }
  },

  data() {
    return {};
  },

  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  }
};
</script>
<style scoped lang="scss">
.l-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
