<!-- menu-item -->
<template>
  <div class="l-menu-item"  :class="{'active': isActive}" @click="selectMenuItem">
      <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"],

  props: {
    name: {
      type: String,
      required: true
    }
  },

  components: {},

  computed: {},

  data() {
    return {
      isActive: false
    };
  },

  created() {
    this.eventBus.$on("update:active", selected => {
      return (this.isActive = selected.includes(this.name));
    });
  },

  mounted() {},

  methods: {
    selectMenuItem() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>
<style lang='scss'>
.l-menu-item {
  //   display: inline-flex;
  padding: 10px 20px;
  //   flex: 1;
  &.active {
    color: red;
  }
}
</style>
