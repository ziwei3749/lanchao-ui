// main里设置了我们npm包的入口是index.js

import Button from "./src/button/button.vue";
import ButtonGroup from "./src/button/button-group.vue";
import Cascader from "./src/cascader/cascader.vue";
import Col from "./src/grid/col.vue";
import Collapse from "./src/collapse/collapse.vue";
import CollapseItem from "./src/collapse/collapse-item.vue";
import Content from "./src/layout/content.vue";
import Footer from "./src/layout/footer.vue";
import Header from "./src/layout/header.vue";
import Icon from "./src/icon.vue";
import Input from "./src/input.vue";
import Layout from "./src/layout/layout.vue";
import Popover from "./src/popover.vue";
import Row from "./src/grid/row.vue";
import Sider from "./src/layout/sider.vue";
import Tabs from "./src/tabs/tabs.vue";
import TabsBody from "./src/tabs/tabs-body.vue";
import TabsHead from "./src/tabs/tabs-head.vue";
import TabsItem from "./src/tabs/tabs-item.vue";
import TabsPane from "./src/tabs/tabs-pane.vue";
import Toast from "./src/toast.vue";
import Slides from "./src/slides/slides.vue";
import SlidesItem from "./src/slides/slides-item.vue";
import Menu from "./src/menu/menu.vue";
import MenuItem from "./src/menu/menu-item.vue";
import SubMenu from "./src/menu/sub-menu.vue";
import Pager from "./src/pager/pager.vue";

const LanChaoUI = {
  Button,
  ButtonGroup,
  Icon,
  Cascader,
  Col,
  Collapse,
  CollapseItem,
  Content,
  Footer,
  Header,
  Input,
  Layout,
  Popover,
  Row,
  Sider,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Toast,
  Slides,
  SlidesItem,
  Menu,
  MenuItem,
  SubMenu,
  Pager,
  install: install
};

let currentToast;

// 提供一个Install方法
function install(Vue) {
  Vue.prototype.$toast = (message, options) => {
    // 存在就销毁当前的toast,防止用户多次点击的
    if (currentToast) {
      currentToast.close();
    }

    // 用户点击了关闭的话，我们emit通知出来。因为用户点击了关闭，但currentToast还是有值的，需要设置为null，否则导致多一次close执行
    let onClose = () => {
      currentToast = null;
    };
    currentToast = createToast(Vue, message, options, onClose);
  };

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
  Vue.component("l-pager", Pager);
}

/**
 * helpers

 */
function createToast(Vue, message, options = {}, onClose) {
  // 生成一个toast组件，然后生插入到body中
  options.message = message;
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({ propsData: options }).$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);

  return toast;
}

export default LanChaoUI;
