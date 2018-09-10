<!-- slides-item -->
<template>
  <transition name="slides-item">
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
<style lang='scss' scoped>
@import "../styles/var";

.l-slides-item {
}
</style>
