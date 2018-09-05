import Vue from "vue";
import Demo from "./demo.vue";

import Button from "./button/button.vue";
import ButtonGroup from "./button/button-group.vue";
import Cascader from "./cascader/cascader.vue";
import Col from "./grid/col.vue";
import Collapse from "./collapse/collapse.vue";
import CollapseItem from "./collapse/collapse-item.vue";
import Content from "./layout/content.vue";
import Footer from "./layout/footer.vue";
import Header from "./layout/header.vue";
import Icon from "./icon.vue";
import Input from "./input.vue";
import Layout from "./layout/layout.vue";
import Popover from "./popover.vue";
import Row from "./grid/row.vue";
import Sider from "./layout/sider.vue";
import Tabs from "./tabs/tabs.vue";
import TabsBody from "./tabs/tabs-body.vue";
import TabsHead from "./tabs/tabs-head.vue";
import TabsItem from "./tabs/tabs-item.vue";
import TabsPane from "./tabs/tabs-pane.vue";
import Toast from "./toast.vue";
import Slides from "./slides/slides.vue";
import SlidesItem from "./slides/slides-item.vue";
import Menu from "./menu/menu.vue";
import MenuItem from "./menu/menu-item.vue";
import SubMenu from "./menu/sub-menu.vue";

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
Vue.component("l-slides", Slides);
Vue.component("l-slides-item", SlidesItem);
Vue.component("l-menu", Menu);
Vue.component("l-menu-item", MenuItem);
Vue.component("l-sub-menu", SubMenu);

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");
