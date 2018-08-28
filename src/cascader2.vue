<!-- cascader2 -->
<template>
    <div class="cascader2">
        <div class="trigger">
            {{selectedResult}}
        </div>
        <div class="popover">
            <cascaderItemTest :items="source"
                              :selected="selected"
                              :level="0"
                              @update:selected="onUpdateSelected">
            </cascaderItemTest>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    selectedResult() {
      return this.selected.map(item => item.name).join("/");
    }
  },

  props: {
    source: {
      type: Array
    },

    selected: {
      type: Array
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    onUpdateSelected(selectedCopy) {
      console.log(selectedCopy);
      // 改变source

      this.$emit("update:selected", selectedCopy);
    }
  }
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
