# 兰超的基础 UI 组件库 lanchao-ui

[![Build Status](https://travis-ci.com/ziwei3749/lanchao-ui.svg?branch=master)](https://travis-ci.com/ziwei3749/lanchao-ui)

## 介绍

这是我在学习 vue 过程中，做的一个基础 UI 框架，希望对你有用

## 开始使用

- 1. 安装 lanchao-ui

```js
npm install lanchao-ui --save-dev

```

- 2.  在Vue项目中引入lanchao-ui

方式1： 全局引用

这样会调用我提供的install方法，就可以在全局使用组件，无需注册
```js
import Vue from 'vue';
import LanChaoUI from 'lanchao-ui';
import 'lanchao-ui/dist/lanchao.css'

Vue.use(LanChaoUI)
```

方式2: 局部引用
```js
import { Button, ButtonGroup, Icon } from "lanchao-ui";

export default {
    name: "app",
    components: {
        HelloWorld,
        "l-button": Button,
        "l-button-group": ButtonGroup,
        icon: Icon
    }
};

```




## 文档

https://ziwei3749.github.io/lanchao-ui/


