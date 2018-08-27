import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import Content from "./content.vue";
import Sider from "./sider.vue";
import Toast from "./toast.vue";
import Tabs from "./tabs.vue";
import TabsHead from "./tabs-head.vue";
import TabsBody from "./tabs-body.vue";
import TabsItem from "./tabs-item.vue";
import TabsPane from "./tabs-pane.vue";
import Popover from "./popover.vue";
import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";
import Cascader from "./cascader.vue";

import plugin from "./plugin.js";

Vue.component("l-button", Button);
Vue.component("l-icon", Icon);
Vue.component("l-button-group", ButtonGroup);
Vue.component("l-input", Input);
Vue.component("l-row", Row);
Vue.component("l-col", Col);
Vue.component("l-layout", Layout);
Vue.component("l-header", Header);
Vue.component("l-footer", Footer);
Vue.component("l-content", Content);
Vue.component("l-sider", Sider);
Vue.component("l-toast", Toast);
Vue.component("l-tabs", Tabs);
Vue.component("l-tabs-head", TabsHead);
Vue.component("l-tabs-body", TabsBody);
Vue.component("l-tabs-item", TabsItem);
Vue.component("l-tabs-pane", TabsPane);
Vue.component("l-popover", Popover);
Vue.component("l-collapse", Collapse);
Vue.component("l-collapse-item", CollapseItem);
Vue.component("l-cascader", Cascader);

Vue.use(plugin);

new Vue({
  el: "#app",
  data: {
    loading: false,
    username: "",
    selectedTab: "sports",
    Bus: new Vue(),
    val: "",
    selected: ["2"],
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
  },
  created() {
    // console.log(this.val)
  },
  methods: {
    showToast() {
      this.$toast(`啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊${Math.random() * 100}`, {
        enableHtml: false,
        autoClose: false,
        position: "top",
        closeButton: {
          text: "关闭",
          callback: toast => {
            console.log("用户的do something");
            console.log(toast); //组件在callback时把实例交给用户
          }
        }
      });
    },
    handleSelected() {},
    yyy() {
      console.log("yyy");
    },
    changeHandle(e) {
      // console.log( this.selected )
      this.selected = e;
    }
  }
});
