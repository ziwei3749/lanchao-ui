<!-- tabs-pane -->
<template>
    <div class="l-tabs-pane"
         v-show="isActive"
         :class="{'l-active':isActive}">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "l-tabs-pane",

  components: {},

  computed: {},

  props: {
    name: {
      type: String
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  inject: ["eventBus"],

  created() {
    this.eventBus.$on("tab-click", name => {
      this.isActive = name === this.name;
    });
  },

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.l-tabs-pane {
  padding: 1em;
  &.l-active {
  }
}
</style>
