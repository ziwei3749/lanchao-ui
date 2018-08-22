<!-- cascader -->
<template>
    <div class="l-cascader">
        <div class="l-trigger"
             @click="togglePopover">
            <!-- <slot></slot> -->
            {{result || '&nbsp;'}}   
            <!-- 一开始如果没有，否则会导致css有一些问题,所以用&nbsp;占位 -->
        </div>
        <div class="l-popover-wrapper"
             v-show="popoverVisible">
            <l-cascader-items :items="source"
                           class="popover"
                           :popoverHeight="popoverHeight"
                           :style="{height: popoverHeight}"
                           :selected="selected"
                           @update:selected="onUpdateSelected">
            </l-cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from "./cascader-items.vue";
export default {
  components: {
    "l-cascader-items": CascaderItems
  },

  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    result() {
      return this.selected.map(v => v.name).join("/");
    }
  },

  data() {
    return {
      popoverVisible: true
    };
  },

  created() {},

  mounted() {},

  methods: {
    togglePopover() {
      this.popoverVisible = !this.popoverVisible;
    },
    onUpdateSelected(currentSelected) {
      this.$emit("update:selected", currentSelected);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "var.scss";
.l-cascader {
  position: relative;
  .l-trigger {
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    border: 1px solid $border-color;
    height: $input-height;
    min-width: 10em;
    border-radius: $border-radius;
  }
  .l-popover-wrapper {
    margin-top: 8px;
    position: absolute;
    background: #fff;
    top: 100%;
    left: 0;
    display: flex;
    @extend .box-shadow;
    .level1 {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
