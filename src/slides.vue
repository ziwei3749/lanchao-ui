<!-- slides -->
<template>
  <div class="l-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd">
    <div class="l-slides-window"
         ref="window">
      <div class="l-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="l-dots">
      <span @click="select(selectedIndex -1)"><l-icon name="left"></l-icon></span>
      <span v-for="n in childrenLength"
            :key="n"
            :class="{active: selectedIndex === n-1}"
            @click="select(n-1)">
        {{n}}
      </span>
      <span @click="select(selectedIndex + 1)"><l-icon name="right"></l-icon></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "l-slides",

  props: {
    selected: {
      type: String | Number
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },

  components: {},

  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected);

      return index === -1 ? 0 : index;
    },
    names() {
      // names是所有name为l-slide-item的names集合
      return this.slideItems.map(vm => vm.name);
    },
    slideItems() {
      return this.$children.filter(vm => vm.$options.name === "l-slides-item");
    }
  },

  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timeId: undefined,
      startTouch: undefined,
      endTouch: undefined
    };
  },

  created() {},

  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.slideItems.length;
  },

  updated() {
    this.updateChildren();
  },

  methods: {
    onTouchStart(e) {
      this.pause();
      this.startTouch = e.touches[0];
    },

    onTouchMove() {},

    onTouchEnd(e) {
      this.playAutomatically();
      this.endTouch = e.changedTouches[0];
      if (this.userHasSlide() === false) return;

      if (this.endTouch.clientX - this.startTouch.clientX < 0) {
        console.log("往左边划");
        this.select(this.selectedIndex + 1);
      } else {
        this.select(this.selectedIndex - 1);
        console.log("往右边划");
      }
    },

    userHasSlide() {
      // 滚动的距离如果小于window的五分之一，就不认为用户在滑动
      let windowWidth = this.$refs.window.clientWidth;
      let scrollWidth = this.endTouch.clientX - this.startTouch.clientX;
      if (Math.abs(scrollWidth) < windowWidth / 5) {
        return false;
      } else {
        return true;
      }
    },

    select(newIndex) {
      // 更新之前，保存旧的值index
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[newIndex]);
    },

    playAutomatically() {
      if (this.timeId) return; // 看当前是否有动画，如果没有才播放.避免重复的动画
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1;

        this.select(newIndex); // 告诉外界选中 newIndex
        this.timeId = setTimeout(run, 3000);
      };

      this.timeId = setTimeout(run, 3000);
    },

    pause() {
      // 暂停，就是停止定时器。  当用户的鼠标移动到轮播图上时
      window.clearTimeout(this.timeId);
      this.timeId = undefined;
    },

    onMouseEnter() {
      console.log("onMouseEnter");
      this.pause();
    },

    onMouseLeave() {
      this.playAutomatically();
    },

    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },

    updateChildren() {
      let selected = this.getSelected();

      this.slideItems.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (
          this.lastSelectedIndex === this.slideItems.length - 1 &&
          this.selectedIndex === 0
        ) {
          reverse = false;
        }
        if (
          this.selectedIndex === this.slideItems.length - 1 &&
          this.lastSelectedIndex === 0
        ) {
          reverse = true;
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          // 确保reverse生效后，再去修改selected
          vm.selected = selected;
        });
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.l-slides {
  display: block;
  .l-slides-window {
    overflow: hidden;
    .l-slides-wrapper {
      position: relative;
    }
  }
  .l-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ddd;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: black;
        color: #fff;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
