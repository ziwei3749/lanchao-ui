<!-- sub-menu -->
<template>
    <div class="l-sub-menu"
         v-click-outside="closePopover"
         ref="submenu">
        <div class="l-title"
             :class="{'active' : isActive}"
             @click="togglePopover">
            <slot name="title"></slot>
        </div>

        <div v-if="subMenuVisible"
             ref="subMenuPopover"
             class="l-sub-menu-popover">
            <slot></slot>
        </div>

    </div>
</template>

<script>
import ClickOutside from "../click-outside";
export default {
  inject: ["rootMenu"],

  directives: { ClickOutside },
  props: {
    name: {
      type: String,
      required: true
    }
  },

  //   directives: {
  //     "click-outside": {
  //       bind(el, binding) {
  //         let callback = e => {
  //           if (el === e.target || el.contains(e.target)) {
  //             return;
  //           } else {
  //             binding.value();
  //             document.removeEventListener("click", callback);
  //           }
  //         };
  //         document.addEventListener("click", callback);
  //       }
  //     }
  //   },

  components: {},

  computed: {
    isActive() {
      return this.rootMenu.namePath.includes(this.name);
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
    togglePopover() {
      this.subMenuVisible = !this.subMenuVisible;
    },
    closePopover() {
      this.subMenuVisible = false;
    },
    updateNamePath() {
      this.rootMenu.namePath.unshift(this.name);
      // 通知父元素，给自己加上isActive
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    }
  }
};
</script>
<style lang='scss'>
@import "var";
.l-sub-menu {
  position: relative;
  .l-title {
    padding: 10px 20px;
    position: relative;
    &.active {
      color: $blue;
      &::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  .l-sub-menu-popover {
    box-shadow: 0 0 3px fade_out(black, 0.8);
    font-size: $font-size;
    min-width: 9em;
    border-radius: 2px;
    margin-top: 4px;
    position: absolute;
    background: #fff;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
}

.l-sub-menu .l-sub-menu .l-sub-menu-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
  background: #fff;
}
</style>
