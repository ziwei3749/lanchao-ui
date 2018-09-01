<!-- slides -->
<template>
  <div class="l-slides">
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
      lastSelectedIndex: undefined
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
      let index = this.names.indexOf(this.getSelected());

      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        this.clickDots(newIndex);
        setTimeout(run, 3000);
      };

      // setTimeout(run, 3000);
    },

    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },

    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
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
  border: 1px solid black;
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
