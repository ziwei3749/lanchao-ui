<!-- demo -->
<template>

    <div id="app">
      <div>
            <h2>Toast组件</h2>
            <l-button @click="showToast">showToast</l-button>
        </div>
        <div>
            <h2>网格组件 、 栅格系统</h2>
            <l-row gutter="20">
                <l-col span="12"></l-col>
                <l-col span="12"></l-col>
            </l-row>
            <l-row gutter="20">
                <l-col span="24"
                       :ipad="{span:12}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
                <l-col span="24"
                       :ipad="{span:11,offset:1}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
                <l-col span="24"
                       :ipad="{span:12}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
                <l-col span="24"
                       :ipad="{span:12}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
                <l-col span="24"
                       :ipad="{span:12}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
                <l-col span="24"
                       :ipad="{span:12}"
                       :narrow-pc="{span:8}">
                    <div class="demo"></div>
                </l-col>
            </l-row>
        </div>
        <div>
            <h2>Button组件</h2>
            <l-button>
                我爱
            </l-button>
            <l-button icon="settings">
                我爱
            </l-button>
            <l-button icon="settings"
                      icon-position="left"
                      :loading="true">
                我爱JavaScript
            </l-button>
            <l-button icon="settings"
                      icon-position="right">
                我爱JavaScript
            </l-button>
            <l-button-group>
                <l-button icon="left">上一页</l-button>
                <l-button>更多</l-button>
                <l-button icon="right"
                          icon-position="right">下一页</l-button>
            </l-button-group>
        </div>
        <div style="margin-bottom: 20px; margin-left: 30px">
            <h2 style="margin-bottom: 20px">Popover组件</h2>
            <div style="overflow:hidden; border: 1px solid green; padding: 15px">
                <l-popover>
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='bottom'>
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='left'>
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='right'>
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>
            </div>

            <div style="overflow:hidden; border: 1px solid green; padding: 15px">
                <l-popover position='top'
                           trigger="hover">
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='bottom'
                           trigger="hover">
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='left'
                           trigger="hover">
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>

                <l-popover position='right'
                           trigger="hover">
                    <template slot="content">
                        asdsadasdasdasdadsadadaddsdasda
                    </template>
                    <l-button>button</l-button>
                </l-popover>
            </div>

        </div>
        <div style="margin-left:100px">
            <h2>Cascader级联选择器</h2>
            <p>0:{{selected && selected[0] && selected[0].name || 'null'}}</p>
            <p>1:{{selected && selected[1] && selected[1].name || 'null'}}</p>
            <p>2:{{selected && selected[2] && selected[2].name || 'null'}}</p>
            <div>
                <l-cascader :source.sync="source"
                            :selected.sync="selected"
                            popover-height="200px"
                            :load-data="loadData">
                </l-cascader>

            </div>

        </div>
    </div>
</template>

<script>
import lCascader from "./cascader";
import db from "./db.js";

function ajax(parent_id) {
  console.log("ajax");
  return new Promise(resolve => {
    setTimeout(() => {
      let result = db.filter(v => v.parent_id === parent_id);
      result.forEach(node => {
        node.isLeaf = true / false;
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      resolve(result);
    }, 2000);
  });
}

export default {
  components: {
    lCascader
  },

  computed: {},

  data() {
    return {
      selected: [],
      source: []
      // source: [
      //   {
      //     name: "浙江",
      //     children: [
      //       {
      //         name: "杭州",
      //         children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
      //       },
      //       {
      //         name: "嘉兴",
      //         children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
      //       }
      //     ]
      //   },
      //   {
      //     name: "福建",
      //     children: [
      //       {
      //         name: "福州",
      //         children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
      //       }
      //     ]
      //   },
      //   {
      //     name: "安徽",
      //     children: [
      //       {
      //         name: "合肥",
      //         children: [{ name: "瑶海" }, { name: "庐阳" }, { name: "仓山" }]
      //       }
      //     ]
      //   }
      // ]
    };
  },

  created() {
    ajax(0).then(data => {
      this.source = data;
    });
  },

  mounted() {},

  methods: {
    loadData(item, updateSource) {
      let id = item.id;
      ajax(id).then(result => {
        updateSource(result);
      });
    },

    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(
          item => item.id === this.selected[0].id
        )[0];
        this.$set(lastLevelSelected, "children", result);
      });
    },
    yyy() {
      console.log("yyy");
    },
    showToast() {
      //   this.$toast(`啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊${Math.random() * 100}`, {
      //     enableHtml: false,
      //     autoClose: false,
      //     position: "top"
      //     // closeButton: {
      //     //     text: "关闭",
      //     //     callback: (toast) => {
      //     //         console.log( "用户的do something" );
      //     //         console.log(toast)   //组件在callback时把实例交给用户
      //     //     }
      //     // }
      //   });
      this.$toast(`啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊`, {
        autoClose: false,
        position: "top"
      });
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

.demo {
  height: 100px;
  background: #ccc;
  border: 1px solid #000;
}
</style>
