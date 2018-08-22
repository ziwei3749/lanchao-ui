<!-- demo -->
<template>
  <div>
    <div style="margin-left:100px">
      <h2>Cascader级联选择器</h2>
      <p>0:{{selected && selected[0] && selected[0].name || 'null'}}</p>
      <p>1:{{selected && selected[1] && selected[1].name || 'null'}}</p>
      <p>2:{{selected && selected[2] && selected[2].name || 'null'}}</p>
      <div>
        <l-cascader :source="source"
                    :selected="selected"
                    popover-height="200px"
                    @update:selected="selected = $event">
        </l-cascader>
      </div>
    </div>
  </div>
</template>

<script>
import lCascader from "./cascader";
export default {
  components: {
    lCascader
  },

  computed: {},

  data() {
    return {
      selected: [],
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
            },
            {
              name: "嘉兴",
              children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
            }
          ]
        },
        {
          name: "安徽",
          children: [
            {
              name: "合肥",
              children: [{ name: "瑶海" }, { name: "庐阳" }, { name: "仓山" }]
            }
          ]
        }
      ]
    };
  },

  created() {},

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
</style>
