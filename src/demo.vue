<!-- demo -->
<template>
  <div id="app">
    <div>
      <!-- <h2>轮播图slide</h2> -->
      <l-slides class='wrapper' :selected.sync="selected">
        <l-slides-item name="fist">
          <div class="box">1</div>
        </l-slides-item>
        <l-slides-item name="second">
          <div class="box">2</div>
        </l-slides-item>
        <l-slides-item name="third">
          <div class="box">3</div>
        </l-slides-item>
      </l-slides>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  computed: {},

  data() {
    return {
      selected: "third"
    };
  },

  created() {
    // let n = 1;
    // setInterval(() => {
    //   if (n === 4) {
    //     n = 1;
    //   }
    //   this.selected = n;
    //   n++;
    // }, 2000);
  },

  mounted() {},

  methods: {}
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
