<!-- demo -->
<template>
  <div id="app">
    <div>
      <!-- horizontal -->
      {{selected}}
      <l-menu :selected.sync="selected"
              mode="horizontal">
        <l-menu-item name="home">首页</l-menu-item>
        <l-sub-menu name="about">
          <template slot="title">关于</template>
          <l-menu-item name="about1">关于1</l-menu-item>
          <l-menu-item name="about2">关于2</l-menu-item>
          <l-menu-item name="about3">关于3</l-menu-item>
        </l-sub-menu>
        <!-- <l-menu-item name="about">关于</l-menu-item> -->
        <l-menu-item name="hire">招聘</l-menu-item>
        <l-sub-menu name="other">
          <template slot="title">其他</template>
          <l-menu-item name="other1">其他1</l-menu-item>
          <l-menu-item name="other2">其他2</l-menu-item>
          <l-menu-item name="other3">其他3</l-menu-item>
        </l-sub-menu>
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
      selected: "home"
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
