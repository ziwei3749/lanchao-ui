---
title: Toast - 提示框
sidebarDepth: 2
---

# Toast 提示框 <Badge text="beta" type="warn"/>

## Toast 基本用法

<toast-demo1></toast-demo1>

```vue
<l-button @click="$toast('点击弹出提示')">上方弹出</l-button>
<l-button @click="$toast('点击弹出提示',{position:'middle'})">中间弹出</l-button>
<l-button @click="$toast('点击弹出提示',{position:'bottom'})">下方弹出</l-button>

<script>
import plugin from "../../../src/plugin";
import Button from "../../../src/button";
import Vue from "vue";
Vue.use(plugin);
</script>
```

## 设置关闭按钮

<toast-demo2></toast-demo2>

```vue
<l-button @click="close">中间弹出</l-button>

<script>
methods: {
    close() {
        this.$toast(`啦啦啦😝${Math.random() * 100}`,
            {
                autoClose: false,
                position: "top",
                closeButton: {
                    text: "关闭",
                    callback: toast => {
                        console.log("用户的do something");
                        console.log(toast); //组件在callback时把实例交给用户
                    }
                }
            }
        );
    }
}
</script>

```

## Attributes

|   参数    |            说明             |  类型  |        可选值         | 默认值 |
| :-------: | :-------------------------: | :----: | :-------------------: | :----: |
|  message  |            文本             | String |           —           |   —    |
| autoClose | 是否自动关闭,可设置关闭时间 |   —    |     Number/false      |  2000  |
| position  |        设置弹出位置         | String | top / bottom / middle |  top   |
| closeButton  |        设置按钮的文本和事件         | Object | — |  —   |


<style>
table th:nth-child(1) {
    width: 100px;
}
table th:nth-child(2) {
    width: 100px;
}
table th:nth-child(3) {
    width: 100px;
}
table th:nth-child(4) {
    width: 290px;
}
table th:nth-child(5) {
    width: 100px;
}
</style>
