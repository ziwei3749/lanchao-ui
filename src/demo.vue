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
          <l-sub-menu name="lian_xi_fang_shi">
            <template slot="title">联系方式</template>
            <l-menu-item name="qq">QQ</l-menu-item>
            <l-menu-item name="wx">微信</l-menu-item>
            <l-sub-menu name="mobile">
              <template slot="title">手机</template>
              <l-menu-item name="移动">移动</l-menu-item>
              <l-menu-item name="联通">联通</l-menu-item>
            </l-sub-menu>
          </l-sub-menu>
        </l-sub-menu>
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
    handleSelect() {
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
