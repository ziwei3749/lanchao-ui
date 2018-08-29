import Vue from "vue";
import Demo from "./demo.vue";

import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import Cascader from "./cascader.vue";
import Col from "./col.vue";
import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";
import Content from "./content.vue";
import Footer from "./footer.vue";
import Header from "./header.vue";
import Icon from "./icon.vue";
import Input from "./input.vue";
import Layout from "./layout.vue";
import Popover from "./popover.vue";
import Row from "./row.vue";
import Sider from "./sider.vue";
import Tabs from "./tabs.vue";
import TabsBody from "./tabs-body.vue";
import TabsHead from "./tabs-head.vue";
import TabsItem from "./tabs-item.vue";
import TabsPane from "./tabs-pane.vue";
import Toast from "./toast.vue";

import plugin from "./plugin.js";

Vue.component("l-button-group", ButtonGroup);
Vue.component("l-button", Button);
Vue.component("l-cascader", Cascader);
Vue.component("l-col", Col);
Vue.component("l-collapse-item", CollapseItem);
Vue.component("l-collapse", Collapse);
Vue.component("l-content", Content);
Vue.component("l-footer", Footer);
Vue.component("l-header", Header);
Vue.component("l-icon", Icon);
Vue.component("l-input", Input);
Vue.component("l-layout", Layout);
Vue.component("l-popover", Popover);
Vue.component("l-row", Row);
Vue.component("l-sider", Sider);
Vue.component("l-tabs-body", TabsBody);
Vue.component("l-tabs-head", TabsHead);
Vue.component("l-tabs-item", TabsItem);
Vue.component("l-tabs-pane", TabsPane);
Vue.component("l-tabs", Tabs);
Vue.component("l-toast", Toast);

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");
