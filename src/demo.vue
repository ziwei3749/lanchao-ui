<!-- demo -->
<template>
  <div id="app">
    <div>
      <l-pager style="margin: 50px"  :total-page="10" :current-page.sync="currentPage" @currentChange="onCurrentChange">
      </l-pager>
    </div>
    <div>
      {{selectedArray}}
      <l-collapse :selected.sync="selectedArray" :single="false"> 
        <l-collapse-item title="title1" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </l-collapse-item>
        <l-collapse-item title="title2" name="2">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </l-collapse-item>
      </l-collapse>
    </div>
    <div>
      <!-- horizontal -->
      <!-- vertical -->
      {{selected}}
      <l-menu :selected.sync="selected" mode="horizontal">
        <l-menu-item name="home"><a href="https://github.com/ziwei3749">首页</a></l-menu-item>
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

    <div style="margin-top:20px">
      {{selected2}}
      <l-menu :selected.sync="selected2" @update:selected=handleSelect class="menu">
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
      currentPage: 1,
      selectedArray: ["2"],
      selected: "home",
      selected2: "hire"
    };
  },

  created() {},

  mounted() {},

  methods: {
    handleSelect(v) {
      console.log(v);
    },

    onCurrentChange(e) {
      console.log("onCurrentChange监听", e);
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

.menu {
  width: 300px;
}
</style>
