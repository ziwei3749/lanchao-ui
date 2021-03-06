<!-- cascader-item -->
<template>
  <div class="l-cascader-items">
    <div class="l-left">
      <div v-for="item in items"
           :key="item.name"
           class="l-label"
           :class="{'active' : selected.some(v => v.name === item.name)}"
           @click="updateSelected(item)">
        <span class="l-name">{{item.name}}</span>
        <!-- 动态加载的话，根据后台数据是否isLeaf字段判断是否显示箭头  / 非动态加载的，根据childre能判断-->
        <div class="l-icons">
          <template v-if="loadingItem && item.name === loadingItem.name">
            <l-icon name="loading"
                    class="icon-loading"></l-icon>
          </template>
          <template v-else>
            <l-icon v-if="rightArrowVisible(item)"
                    name="right"
                    class="icon-right-arrow">
            </l-icon>
          </template>

        </div>

      </div>
    </div>
    <div class="l-right"
         v-if="rightItems">
      <l-cascader-items :items="rightItems"
                        :popoverHeight="popoverHeight"
                        :style="{height: popoverHeight}"
                        :selected="selected"
                        :level="level+1"
                        :load-data="loadData"
                        :loading-item="loadingItem"
                        @update:selected="onUpdateSelected">
      </l-cascader-items>
    </div>

  </div>
</template>

<script>
import Icon from "../icon";
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
    },
    loadData: {
      type: Function
    },
    loadingItem: {
      type: Object
    }
  },

  components: {
    "l-icon": Icon
  },

  computed: {
    rightItems() {
      // 根据items(也就是source) / selected / level计算属性 rightItems的显示
      let selectedItem = this.selected[this.level];
      if (selectedItem) {
        if (
          selectedItem &&
          selectedItem.children &&
          selectedItem.children.length > 0
        ) {
          return selectedItem.children;
        }
      }
    }
  },

  data() {
    return {
      loadingVisible: true
    };
  },

  created() {},

  mounted() {},

  methods: {
    updateSelected(item) {
      // 如果用户点击的item，是之前已经点击过的item，那么就return掉，不再发起ajax请求
      if (this.selected.map(item => item.name).includes(item.name)) return;

      const selectedCopy = JSON.parse(JSON.stringify(this.selected));
      // 因为是先深拷贝，后赋值，所以这个item实际上并没有被深拷贝，反倒方便了之后我们寻找lastItem  是一个hack
      selectedCopy[this.level] = item;
      selectedCopy.splice(this.level + 1);

      this.$emit("update:selected", selectedCopy);
      /**
       * 精髓： copy.splice(this.level + 1);
       * 这里根据当前的level，截取selected数组
       * 由于截取之后selected数组的变化，比如selected：['福建',undefined,undefined]
       * 那么this.selected[1]就是undefined，所以其rightItems就是null，就不会显示。
       *
       * 通过改变数据selected，直接控制了ui的变化
       */
    },

    onUpdateSelected(selectedCopy) {
      this.$emit("update:selected", selectedCopy);
    },
    rightArrowVisible(item) {
      // 是否是动态加载模式？ 是的话就根基isLeaf判断 ，不是的话就看children
      return this.loadData ? !item.isLeaf : item.children;
    }
  }
};
</script>
<style lang='scss'>
@import "../styles/var.scss";

.l-cascader-items {
  height: 200px;
  display: flex;
  .l-left {
    height: 100%;
    min-width: 120px;
    padding: 0.3em 0;
    overflow: auto;
    -webkit-overflow-scrolling: auto;
    .l-label {
      padding: 0.5em 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      white-space: nowrap;
      &:hover {
        background: $grey;
      }
      &.active {
        background: $grey;
      }
      > .l-name {
        margin-right: 1em;
        user-select: none;
      }
      > .l-icons {
        .icon-right-arrow {
          transform: scale(1);
        }
        .icon-loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
  .l-right {
    height: 100%;
    min-width: 120px;
    border-left: 1px solid $border-color-light;
    overflow: auto;
    -webkit-overflow-scrolling: auto;
  }
}
</style>
