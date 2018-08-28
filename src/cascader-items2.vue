<!-- cascader-items2 -->
<template>
    <div class="cascader-item">
        <div class="left">
            <div v-for="item in items"
                 :key="item.name"
                 @click="updateSelected(item)">
                {{item.name}}
            </div>
        </div>
        <div class="right"
             v-if="rightItems">
            <cascaderItemTest :items="rightItems"
                              :level="level+1"
                              :selected="selected"
                              @update:selected="onUpdateSelected">
            </cascaderItemTest>
        </div>
    </div>
</template>

<script>
export default {
  name: "cascaderItemTest",
  components: {},

  computed: {
    rightItems() {
      console.log("rightItems");
      if (this.selected[this.level]) {
        let selectedItem = this.items.filter(
          item => item.name === this.selected[this.level].name
        )[0];
        if (
          selectedItem &&
          selectedItem.children &&
          selectedItem.children.length > 0
        ) {
          return selectedItem.children;
        }
      }
    }
  },

  props: {
    items: {
      type: Array
    },

    selected: {
      type: Array
    },

    level: {
      type: Number
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    updateSelected(item) {
      console.log(item);
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      selectedCopy[this.level] = item;
      //   selectedCopy.splice(this.level + 1);
      this.$emit("update:selected", selectedCopy);
    },
    onUpdateSelected(selectedCopy) {
      this.$emit("update:selected", selectedCopy);
    }
  }
};
</script>
<style lang='scss'>
.cascader-item {
  display: flex;
  .left {
  }
  .right {
  }
}
</style>
