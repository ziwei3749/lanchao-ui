!<!-- layout -->
<template>
    <div class="l-layout"
         :style="layoutStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
  components: {},

  computed: {
    layoutStyle() {
      return {
        flexDirection: this.direction,
        height: this.height
      };
    }
  },

  props: {
    height: {
      type: String
    }
  },

  data() {
    return {
      direction: ""
    };
  },

  created() {},

  mounted() {
    // 核心就是根据是否有sider组件来判断，自动检测flex-direction的值
    // 可以自己设置宽、高，但意义不大，最高是自己加一个类名，自己写样式
    // 前缀是用来防止有人手贱，写全局css样式的
    // 布局组件包括： layout header content footer sider，一个5个组件
    let hasSilder = false;
    this.$children.forEach(child => {
      if (child.$options.name === "l-sider") {
        hasSilder = true;
      }
    });
    this.direction = hasSilder ? "row" : "column";
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.l-layout {
  //如果layout也是子元素的话，flex-grow:1
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
