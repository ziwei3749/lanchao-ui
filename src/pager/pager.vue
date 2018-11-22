<!-- pager -->
<template>
    <div class="l-pager">
        <span :class="{active : page === currentPage, separator: page === '...'}" v-for="page in pages" class="l-pager-item" :key="page">{{page}}</span>
    </div>
</template>

<script>
export default {
  name: "l-pager",

  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },

  components: {},

  computed: {},

  data() {
    let pages = [
      1,
      this.currentPage - 1,
      this.currentPage - 2,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
      this.totalPage
    ];

    function unique(arr) {
      const obj = {};
      arr.map(number => {
        obj[number] = true;
      });
      return Object.keys(obj).map(item => Number(item));
    }
    // 去重
    pages = unique(pages);

    // 过滤小于1的数字
    pages = pages.filter(num => {
      return num >= 1;
    });

    // 如果当前项和后一项的差值大于1，就在当前项后插入一个...
    pages = pages.reduce((prevResult, current, index) => {
      if (
        pages[index + 1] !== undefined &&
        pages[index + 1] - pages[index] > 1
      ) {
        prevResult.push(current);
        prevResult.push("...");
      } else {
        prevResult.push(current);
      }
      return prevResult;
    }, []);

    return {
      pages: pages.sort((a, b) => a - b)
    };
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "var";
.l-pager {
  background: #fff;
  display: flex;
  .l-pager-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    min-width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.separator {
      border: none;
      cursor: default;
    }
    &.active,
    &:hover {
      border-color: $blue;
      color: $blue;
    }
    &.active {
      cursor: default;
    }
  }
}
</style>
