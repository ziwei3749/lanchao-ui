<!-- tabs-item -->
<template>
    <div class="l-tabs-item"
         :class="[{'l-active':isActive},{'l-disabled': disabled}]"
         :data-name="name"
         @click="emitClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "l-tabs-item",

  components: {},

  props: {
    name: {
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  data() {
    return {
      isActive: false
    };
  },

  inject: ["eventBus"],

  created() {
    if (this.eventBus) {
      this.eventBus.$on("tab-click", name => {
        this.isActive = name === this.name;
      });
    }
  },

  mounted() {},

  methods: {
    emitClick() {
      if (this.disabled) return;
      if (this.eventBus) {
        this.eventBus.$emit("tab-click", this.name, this);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
$blue: #409eff;
$disabled-text-color: #ccc;
.l-tabs-item {
  display: flex;
  align-items: center;
  padding: 0 2em;
  flex-shrink: 0;
  height: 100%;
  cursor: pointer;
  &.l-active {
    color: $blue;
    font-weight: 700;
  }
  &.l-disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
