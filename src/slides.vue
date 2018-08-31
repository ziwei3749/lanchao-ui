<!-- slides -->
<template>
  <div class="l-slides">
    <div class="l-slides-window"
         ref="window">
      <div class="l-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div>
      <!-- {{childrenLength}} -->
      <span v-for="index in childrenLength"
            :key="index">
        {{index}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "l-slides",

  props: {
    selected: {
      type: Number
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },

  components: {},

  computed: {},

  data() {
    return {
      childrenLength: 0
    };
  },

  created() {},

  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
  },

  updated() {
    this.updateChildren();
  },

  methods: {
    playAutomatically() {
      const names = this.$children.map(vm => vm.name);
      let index = names.indexOf(this.getSelected());

      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
          console.log("ha");
          newIndex = names.length - 1;
        }
        if (newIndex === names.length) {
          newIndex = 0;
        }
        this.$emit("update:selected", names[newIndex]);
        setTimeout(run, 3000);
      };

      setTimeout(run, 3000);
    },

    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },

    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach(vm => {
        vm.selected = selected;
        const names = this.$children.map(vm => vm.name);
        let newIndex = names.indexOf(selected);
        let oldIndex = names.indexOf(vm.name);
        if (newIndex > oldIndex) {
          vm.reverse = false;
        } else {
          vm.reverse = true;
        }
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
}
</style>
