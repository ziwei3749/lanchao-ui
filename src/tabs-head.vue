<!-- tabs-header -->
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>

  </div>
</template>

<script>
export default {
    components: {},

    computed: {},

    inject: ["eventBus"],

    data() {
        return {};
    },

    created() {
     
    },

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
.tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper {
        margin-left: auto;
    }
}
</style>