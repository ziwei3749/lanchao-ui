<!-- slides -->
<template>
  <div class="l-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave">
    <div class="l-slides-window"
         ref="window">
      <div class="l-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="l-dots">
      <span v-for="n in childrenLength"
            :key="n"
            :class="{active: selectedIndex === n-1}"
            @click="clickDots(n-1)">
        {{n-1}}
      </span>
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
      return this.names.indexOf(this.selected) || 0;
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },

  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timeId: undefined
    };
  },

  created() {},

  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
  },

  updated() {
    console.log(this.lastSelectedIndex);
    console.log(this.selectedIndex);
    this.updateChildren();
  },

  methods: {
    clickDots(index) {
      // 更新之前，保存旧的值index
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },

    playAutomatically() {
      if (this.timeId) return; // 看当前是否有动画，如果没有才播放.避免重复的动画
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1;
        if (newIndex === -1) {
          newIndex = this.names.length + 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.clickDots(newIndex); // 告诉外界选中 newIndex
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
      this.$children.forEach(vm => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (
          this.lastSelectedIndex === this.$children.length - 1 &&
          this.selectedIndex === 0
        ) {
          reverse = false;
        }
        if (
          this.selectedIndex === this.$children.length - 1 &&
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
    > span {
      &.active {
        color: red;
      }
    }
  }
}
</style>
