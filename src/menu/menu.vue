<!-- menu -->
<template>
    <div class="l-menu"
         :class="classStyle">
        <slot></slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},

  provide() {
    return {
      eventBus: this.eventBus
    };
  },

  props: {
    mode: {
      type: String,
      default: "vertical",
      validator(value) {
        return value === "horizontal" || value === "vertical";
      }
    },

    selected: {
      type: Array,
      default() {
        return [];
      }
    },

    multiple: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classStyle() {
      return `mode-${this.mode}`;
    }
  },

  data() {
    return {
      eventBus: new Vue()
    };
  },

  created() {},

  mounted() {
    this.eventBus.$emit("update:active", this.selected);
    this.eventBus.$emit("changeMode", this.mode);

    this.eventBus.$on("update:selected", name => {
      // 如果数组已经存在该name的话，不能重复push
      if (this.multiple) {
        if (this.selected.indexOf(name) === -1) {
          let arr = JSON.parse(JSON.stringify(this.selected));
          arr.push(name);
          this.$emit("update:selected", arr);
          this.eventBus.$emit("update:active", arr);
        } else {
          let arr = JSON.parse(JSON.stringify(this.selected));
          let index = this.selected.indexOf(name);
          arr.splice(index, 1);
          this.$emit("update:selected", arr);
          this.eventBus.$emit("update:active", arr);
        }
      } else {
        this.$emit("update:selected", [name]);
      }
    });
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.l-menu {
  display: flex;
  border: 1px solid red;
  &.mode-vertical {
    flex-direction: column;
  }
  &.mode-horizontal {
    flex-direction: row;
  }
}
</style>
