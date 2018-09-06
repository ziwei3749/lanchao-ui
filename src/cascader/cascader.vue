<!-- cascader -->
<template>
  <div class="l-cascader"
       v-click-outside="close"
       ref="cascader">
    <div class="l-trigger"
         @click="togglePopover">
        <span>{{result || '&nbsp;'}}</span>
      <!-- 一开始如果没有，否则会导致css有一些问题,所以用&nbsp;占位 -->
    </div>
    <div class="l-popover-wrapper"
         v-if="popoverVisible">
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

  model: {
    prop: "selected",
    event: "update:selected"
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

    onUpdateSelected(selectedCopy) {
      // 这个lastItem,的确是sourceItem里的某一项。因为唯独它没有被深拷贝
      let lastItem = selectedCopy[selectedCopy.length - 1];

      let updateSource = data => {
        this.loadingItem = null;
        if (data.length > 0) {
          this.$set(lastItem, "children", data); // 如果result的结果是空数组，就不挂children属性了
          this.$emit("update:source", this.source);
        }
      };

      if (!lastItem.isLeaf && this.loadData) {
        // 不是叶子，才需要加载数据
        this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
      }

      this.$emit("update:selected", selectedCopy);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../styles/var.scss";
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
    z-index: 100;
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
