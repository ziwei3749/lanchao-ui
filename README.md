# 兰超的基础 UI 组件库 lanchao-ui

[![Build Status](https://travis-ci.com/ziwei3749/lanchao-ui.svg?branch=master)](https://travis-ci.com/ziwei3749/lanchao-ui)

## 介绍

这是我在学习 vue 过程中，做的一个 UI 框架，希望对你有用

## 开始使用

1.  添加 css 样式

使用本框架前,请在 css 中开启 border-box

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

你还需要设置默认颜色等变量（后续会改为 scss 变量）

```css
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
}
```

IE15 及以上浏览器都支持此样式

2.  安装 lanchao-ui

```js
npm install -save lanchao-ui
```

3.  引入 lanchao-ui

```js
import { Button, ButtonGroup, Icon } from "lanchao-ui";
import "lanchao-ui/dist/index.css";

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

4. 引入 svg symbols

```js
<script src="http://at.alicdn.com/t/font_779492_ftpdnpu3gl9.js"></script>
```



## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码