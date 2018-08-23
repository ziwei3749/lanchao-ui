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
    },
    loadData: {
      type: Function
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
      console.log(currentSelected);
      // 有一个缺陷，重新点击北京，反复触发ajax

      let lastItem = currentSelected[currentSelected.length - 1];

      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };

      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });

        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          // 有孩子的，想当没孩子一样找一遍，如果他们的孩子还有孩子，就递归
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };

      let updateSource = result => {
        /**
         * 注意1： 需要深拷贝
         * 注意2： 需要递归搜索，深度优先或者广度优先。
         */
        // let toUpdate = complex(this.source, lastItem.id);
        // console.log(toUpdate);
        // this.$set(toUpdate, "children", result);

        /**
         * 这里拷贝了之后，出现了bug，数据不是响应式的，没法即时更新！！！！！！！！！！！！！！！！！！！！！！！！
         */

        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        if (result.length > 0) {
          // 并不是每次点击都要挂一个children的，如果result的结果是空数组，就不挂children属性了
          toUpdate.children = result;
        }
        this.$emit("update:source", copy);
      };
      this.loadData(lastItem, updateSource);
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
