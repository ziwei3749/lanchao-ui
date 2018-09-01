<!-- slides-item -->
<template>
  <transition name="slide">
    <div class="l-slides-item"
         v-if="visible"
         :class="{reverse}">
      <slot></slot>
    </div>
  </transition>

</template>

<script>
export default {
  name: "l-slides-item",

  props: {
    name: {
      type: Number | String,
      required: true
    }
  },

  components: {},

  computed: {
    visible() {
      return this.name === this.selected;
    }
  },

  data() {
    return {
      selected: null,
      reverse: false
    };
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss'>
.slide-leave-active {
  transition: all 1s;
  // 离开的那个是绝对定位
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.slide-enter-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}

.l-slides-item {
}
</style>
