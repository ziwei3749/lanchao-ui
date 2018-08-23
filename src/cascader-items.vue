<!-- cascader-item -->
<template>
  <div class="l-cascader-items">
    <div class="left">
      <div v-for="item in items"
           :key="item.name"
           class="label"
           @click="clickSelected(item)">
        <span>{{item.name}}</span>
        <l-icon v-if="item.children && selected.some(v=>v.name === item.name)"
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
      /**
       * 根据items(也就是source) / selected / level计算属性 rightItems的显示
       */
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          item => item.name === this.selected[this.level].name
        )[0];
        if (selected && selected.children && selected.children.length > 0) {
          return selected.children;
        }
      }
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    clickSelected(item) {
      // 改变selected，并把selected的备份 emit。
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      /**
       * 精髓： copy.splice(this.level + 1);
       * 这里根据当前的level，截取selected数组
       * 由于截取之后selected数组的变化，比如selected：['福建',undefined,undefined]
       * 那么this.selected[1]就是undefined，所以其rightItems就是null，就不会显示。
       *
       * 通过改变数据selected，直接控制了ui的变化
       */
      copy.splice(this.level + 1);
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
    overflow: auto;
    -webkit-overflow-scrolling: auto;
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
    overflow: auto;
    -webkit-overflow-scrolling: auto;
  }
}
</style>
