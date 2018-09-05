<!-- sub-menu -->
<template>
    <div class="l-sub-menu"
         ref="submenu">
        <span @click="subMenuVisible = !subMenuVisible"
              class="l-title"
              :class="{'active': isActive}">
            <slot name="title"></slot>
        </span>
        <div v-if="subMenuVisible"
             v-click-outside="closePopover"
             ref="subMenuPopover"
             class="l-sub-menu-popover">
            <slot></slot>
        </div>

    </div>
</template>

<script>
export default {
  inject: ["rootMenu"],

  props: {
    name: {
      type: String
    }
  },

  directives: {
    "click-outside": {
      bind(el, binding) {
        let callback = e => {
          if (el === e.target || el.contains(e.target)) {
            return;
          } else {
            binding.value();
            document.removeEventListener("click", callback);
          }
        };

        document.addEventListener("click", callback);
      }
    }
  },

  components: {},

  computed: {
    isActive() {
      let childrenNameArr = this.$children.map(v => v.name);
      return childrenNameArr.includes(this.rootMenu.selected);
    }
  },

  data() {
    return {
      subMenuVisible: false
    };
  },

  created() {},

  mounted() {},

  methods: {
    closePopover() {
      this.subMenuVisible = false;
    }
  }
};
</script>
<style lang='scss'>
.l-sub-menu {
  padding: 10px 20px;
  position: relative;
  .l-title {
    &.active {
      color: red;
    }
  }
  .l-sub-menu-popover {
    border: 1px solid #000;
    position: absolute;
    top: 120%;
    left: 0;
    > .l-menu-item {
      padding: 10px 30px;
      white-space: nowrap;
    }
  }
}
</style>
