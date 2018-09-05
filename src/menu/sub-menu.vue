<!-- sub-menu -->
<template>
    <div class="l-sub-menu">
        <div @click="subMenuVisible = !subMenuVisible">
            <slot name="title"></slot>
        </div>
        <div v-show="subMenuVisible"
             class="l-menu-items"
             :class="subMenuClass">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
  inject: ["eventBus"],

  props: {
    name: {
      type: String
    }
  },
  components: {},

  computed: {
    subMenuClass() {
      return `mode-${this.subMode}`;
    }
  },

  data() {
    return {
      subMenuVisible: false,
      subMode: ""
    };
  },

  created() {},

  mounted() {
    this.eventBus.$on("changeMode", mode => {
      console.log("mode", mode);
      this.subMode = mode;
    });
  },

  methods: {}
};
</script>
<style lang='scss'>
.l-sub-menu {
  flex: 1;
  .l-menu-items {
    display: flex;
    &.mode-vertical {
      flex-direction: column;
    }
    &.mode-horizontal {
      flex-direction: row;
    }
  }
}
</style>
