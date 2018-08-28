<!-- cascader -->
<template>
  <div class="l-cascader"
       v-click-outside="close"
       ref="cascader">
    <div class="l-trigger"
         @click="togglePopover">
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
                        :load-data="loadData"
                        :loading-item="loadingItem"
                        @update:selected="onUpdateSelected">
      </l-cascader-items>

    </div>
  </div>
</template>



<script>
import CascaderItems from "./cascader-items.vue";

// 这个写法，让监听器只有一个，每次监听就把所有符合条件的fn都执行一遍
let callback = [];
document.addEventListener("click", e => {
  callback.forEach(item => {
    if (item.el === e.target || item.el.contains(e.target)) {
      return;
    } else {
      item.callback();
    }
  });
});

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
      popoverVisible: false,
      loadingVisible: false,
      loadingItem: null
    };
  },

  created() {},

  mounted() {},

  directives: {
    "click-outside": {
      bind(el, binding) {
        callback.push({ el, callback: binding.value });
      }
    }
  },

  methods: {
    open() {
      this.popoverVisible = true;
    },

    close() {
      this.popoverVisible = false;
    },

    togglePopover() {
      /**
       * 思路：
       * 1.原生event记得自己主动取消事件绑定
       * 2.不能用阻止冒泡。就是点击docuemnt判断点击的区域，来决定做什么逻辑
       */

      if (this.popoverVisible) {
        this.close();
      } else {
        this.open();
      }
    },

    onUpdateSelected(currentSelected) {
      // 这个方法的核心，就是找到一个用户点击的item，给它的children挂上data
      // 因为组件不清楚有几层业务数据，所以只能递归寻找item
      console.log(currentSelected);
      // 有一个缺陷，重新点击北京，反复触发ajax
      let lastItem = currentSelected[currentSelected.length - 1];

      let complex = (source, id) => {
        let targetItem = source.filter(item => item.id === id)[0];
        if (targetItem) return targetItem;
        else {
          for (let i = 0; i < source.length; i++) {
            let hasChildren =
              source[i].children && source[i].children.length > 0;
            if (hasChildren) {
              targetItem = complex(source[i].children, id);
              if (targetItem) return targetItem;
            }
          }
          return undefined;
        }
      };

      let updateSource = data => {
        console.log("加载结束，拿到数据...");
        this.loadingItem = null;
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
        // 根据source和当前id，找到哪一项需要加children，渲染children
        let toUpdateItem = complex(copy, lastItem.id);
        if (data.length > 0) {
          // 并不是每次点击都要挂一个children的，如果result的结果是空数组，就不挂children属性了
          toUpdateItem.children = data;
        }
        this.$emit("update:source", copy);
      };
      if (!lastItem.isLeaf && this.loadData) {
        // 不是叶子，才需要加载数据
        this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
      }

      this.$emit("update:selected", currentSelected);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "var.scss";
.l-cascader {
  position: relative;
  display: inline-block;
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
    z-index: 1;
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
