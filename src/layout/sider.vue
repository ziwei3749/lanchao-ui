!<!-- sider -->
<template>
    <div class="l-sider"
         :style="siderStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
  name: "l-sider",

  components: {},

  computed: {
    siderStyle() {
      return {
        width: this.width
      };
    }
  },

  props: {
    width: {
      type: [String, Number]
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.l-sider {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
