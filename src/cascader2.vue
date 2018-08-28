<!-- cascader2 -->
<template>
  <div class="cascader2">
      <div class="trigger">

      </div>
      <div class="popover">
          <cascader-items2></cascader-items2>
      </div>
  </div>
</template>

<script>
import cascaderItem from "cascader-items2.vue";
export default {
  components: {
    "cascader-items2": cascaderItem
  },

  computed: {},

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss'>
.cascader2 {
  .trigger {
    width: 200px;
    height: 70px;
    border: 1px solid #000;
  }
  .popover {
  }
}
</style>
