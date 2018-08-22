!<!-- content -->
<template>
    <div class="l-content"
         :style="contentStyle">
        <slot></slot>
    </div>

</template>

<script>
export default {
  name: "l-content",

  components: {},

  computed: {
    contentStyle() {
      return {
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
    return {};
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.l-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
