<!-- sub-menu -->
<template>
    <div class="l-sub-menu"
         ref="submenu">
        <div class="l-title"
              @click="togglePopover">
            <slot name="title"></slot>
        </div>

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
          console.log(1);
          if (el === e.target || el.contains(e.target)) {
            return;
          } else {
            binding.value();
            document.removeEventListener("click", callback);
          }
        };
        console.log(2);
        document.addEventListener("click", callback);
      }
    }
  },

  components: {},

  computed: {},

  data() {
    return {
      subMenuVisible: false,
      initActive: false
    };
  },

  created() {},

  mounted() {},

  methods: {
    togglePopover() {
      this.subMenuVisible = !this.subMenuVisible;
    },
    closePopover() {
      console.log("closePopover");
      this.subMenuVisible = false;
    }
  }
};
</script>
<style lang='scss'>
.l-sub-menu {
  position: relative;
  .l-title {
    padding: 10px 20px;
    &.active {
      color: red;
    }
  }
  .l-sub-menu-popover {
    border: 1px solid #000;
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
}

.l-sub-menu .l-sub-menu .l-sub-menu-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>
