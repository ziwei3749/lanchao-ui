<!-- sub-menu -->
<template>
  <div class="l-sub-menu"
       v-click-outside="closePopover"
       ref="submenu">
    <div class="l-title"
         :class="{'active' : isActive}"
         @click="togglePopover">
      <slot name="title"></slot>
      <span class="icon-wrapper"
            :class="{'open':subMenuVisible}">
        <l-icon name="right"></l-icon>
      </span>
    </div>

    <!--  垂直菜单才需要动画 -->
    <template v-if="this.rootMenu.mode==='vertical'">
      <transition @leave="leave"
                  @enter="enter"
                  @after-enter="afterEnter"
                  :css="false">
        <div v-show="subMenuVisible"
             ref="subMenuPopover"
             :class="popoverClass">
          <slot></slot>
        </div>
      </transition> 
    </template>

    <!-- 横向菜单不需要动画 -->
    <template v-else>
      <div v-show="subMenuVisible"
           ref="subMenuPopover"
           :class="popoverClass">
        <slot></slot>
      </div>
    </template>

  </div>
</template>

<script>
import Icon from "../icon";
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

  components: {
    "l-icon": Icon
  },

  computed: {
    isActive() {
      return (
        this.rootMenu.mode === "horizontal" &&
        this.rootMenu.namePath[0] === this.name
      );
    },

    popoverClass() {
      return `l-sub-menu-popover-${this.rootMenu.mode}`;
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
      this.$refs.subMenuPopover.style.height = 200 + "px";
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
    },

    enter(el, done) {
      el.style.height = "auto";
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect(); // 强制让浏览器，不要合并渲染

      el.style.height = height + "px";

      el.addEventListener("transitionend", () => {
        done();
      });
    },

    afterEnter(el) {
      el.style.height = "auto";
    },

    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = height + "px";
      el.getBoundingClientRect();
      el.style.height = 0 + "px";
      el.addEventListener("transitionend", () => {
        done();
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../styles/var";

.l-sub-menu {
  position: relative;

  .l-title {
    padding: 10px 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    .icon-wrapper {
      transition: all 0.25s;
      &.open {
        transform: rotate(90deg);
      }
    }
  }
  // 横向的需要绝对定位
  .l-sub-menu-popover-horizontal {
    box-shadow: 0 0 3px fade_out(black, 0.8);
    font-size: $font-size;
    min-width: 9em;
    border-radius: 2px;
    margin-top: 4px;
    position: absolute;
    z-index: 30;
    background: #fff;
    top: 100%;
    left: 0;
    white-space: nowrap;
  }
  // 纵向的不需要绝对定位
  .l-sub-menu-popover-vertical {
    padding-left: 1.5em;
    font-size: $font-size;
    min-width: 9em;
    background: #fff;
    top: 100%;
    left: 0;
    white-space: nowrap;
    transition: height 0.25s;
    overflow: hidden;
  }
}

// 选中2级菜单 水平模式
.l-sub-menu .l-sub-menu .l-sub-menu-popover-horizontal {
  top: 0;
  left: 100%;
  margin-left: 8px;
  background: #fff;
}
</style>
