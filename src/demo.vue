<!-- demo -->
<template>
  <div id="app">
    <div>
      <!-- horizontal -->
      {{selected}}
      <l-menu :selected.sync="selected" multiple mode="vertical">
        <l-menu-item name="home">首页</l-menu-item>
        <l-menu-item name="about">关于</l-menu-item>
        <l-menu-item name="hire">招聘</l-menu-item>
        <!-- <l-sub-menu index="2">
          <template slot="title">关于</template>
          <l-menu-item index="2-1">选项1</l-menu-item>
          <l-menu-item index="2-2">选项2</l-menu-item>
          <l-menu-item index="2-3">选项3</l-menu-item>
        </l-sub-menu> -->
        
      </l-menu>

    </div>
  </div>
</template>

<script>
export default {
  components: {},

  computed: {},

  data() {
    return {
      selected: ["home", "about"]
    };
  },

  created() {},

  mounted() {},

  methods: {
    handleSelect(v) {
      // console.log(v);
    }
  }
};
</script>
<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}

.wrapper {
  margin: 40px;
}

.box {
  height: 300px;
  width: 100%;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
