<!-- pager -->
<template>
  <div class="l-pager" :class="{'hide': hideIfOnePage && totalPage === 1}">
    <span @click="onClickPage(currentPage-1)" class="pager-nav-button prev" :class="{'unClickible':currentPage === 1}">
      <l-icon name="left"></l-icon>
    </span>
    <!-- eslint-disable-next-line  -->
    <span v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="l-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="l-pager-item separator">
          <l-icon class="dotsStyle" name="dots"></l-icon>
        </span>
      </template>
      <template v-else>
        <span class="l-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </span>
    <span @click="onClickPage(currentPage+1)" class="pager-nav-button next" :class="{'unClickible':currentPage === totalPage}">
      <l-icon name="right"></l-icon>
    </span>

  </div>
</template>

<script>
import Icon from "../icon";

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

  components: {
    "l-icon": Icon
  },

  computed: {
    pages() {
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

      // 过滤小于1的数字,过滤大于总页码的
      pages = pages.filter(num => {
        return num >= 1 && num <= this.totalPage;
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

      pages = pages.sort((a, b) => a - b);

      return pages;
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    onClickPage(page) {
      if (page < 1 || page > this.totalPage) {
        return;
      }
      this.$emit("update:currentPage", page);
      this.$emit("currentChange", page);
    },

    reRender(page) {
      let pages = [
        1,
        page - 1,
        page - 2,
        page,
        page + 1,
        page + 2,
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

      // 过滤小于1的数字,过滤大于总页码的
      pages = pages.filter(num => {
        return num >= 1 && num <= this.totalPage;
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

      pages = pages.sort((a, b) => a - b);

      this.pages = pages;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../styles/var.scss";
.l-pager {
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  &.hide {
    display: none;
  }
  .pager-nav-button {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    min-width: 25px;
    height: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &:hover {
      border-color: $blue;
      color: $blue;
    }
    &.unClickible {
      cursor: not-allowed;
      &:hover {
        border-color: #e1e1e1;
      }
    }
  }
  .l-pager-item {
    border: 1px solid #e1e1e1;
    border-radius: $border-radius;
    padding: 0 4px;
    min-width: 25px;
    height: 20px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;
    &.current {
      border-color: $blue;
      color: $blue;
      cursor: default;
    }
    &:hover {
      border-color: $blue;
      color: $blue;
    }
    &.separator {
      border: none;
      cursor: default;
      &:hover {
        color: #000;
      }
    }
    .dotsStyle {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>
