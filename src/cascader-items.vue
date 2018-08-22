<!-- cascader-item -->
<template>
  <div class="l-cascader-items">
    level: {{level}}
    <div class="left">
      <div v-for="item in items"
           :key="item.name"
           class="label"
           @click="updateSelected(item)">
        <span>{{item.name}}</span>
        <l-icon v-if="item.children"
                name="right"
                class="icon">
        </l-icon>
      </div>
    </div>
    <div class="right"
         v-if="rightItems">
      <l-cascader-items :items="rightItems"
                        :popoverHeight="popoverHeight"
                        :style="{height: popoverHeight}"
                        :selected="selected"
                        :level="level+1"
                        @update:selected="onUpdateSelected">
      </l-cascader-items>
    </div>

  </div>
</template>

<script>
export default {
  name: "l-cascader-items",

  props: {
    items: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },

  components: {},

  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level];
      return currentSelected && currentSelected.children
        ? currentSelected.children
        : null;
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    updateSelected(item) {
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      this.$emit("update:selected", copy);
    },

    onUpdateSelected(currentSelected) {
      this.$emit("update:selected", currentSelected);
    }
  }
};
</script>
<style lang='scss'>
@import "var.scss";
.l-cascader-items {
  height: 200px;
  display: flex;
  .left {
    height: 100%;
    padding: 0.3em 0;
    .label {
      padding: 0.3em 1em;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 1em;
        transform: scale(0.5);
      }
    }
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
}
</style>
