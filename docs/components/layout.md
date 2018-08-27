---
title: Layout - 布局
sidebarDepth: 2
---

# Layout 布局 <Badge text="beta" type="warn"/>

用于布局的容器组件，方便快速搭建页面的基本结构:

-   `<l-layout>`: 当子元素中包含 `<l-sider>` 时，全部子元素会水平左右排列，否则会垂直上下排列。
-   `<l-header>`: 顶栏容器。
-   `<l-content>`: 主要区域容器。
-   `<l-footer>`: 底部容器。
-   `<l-sider>`: 侧边栏容器。

::: warning
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<l-layout>` 的子元素只能是后四者，后四者的父元素也只能是 `<l-layout>`。
:::

## 常见页面布局

<layout-demo />

```vue
<!-- demo1 -->
<l-layout style="margin: 40px 0">
    <l-header class="header">header</l-header>
    <l-content class="content">content</l-content>
</l-layout>

<!-- demo2 -->
<l-layout style="margin-bottom: 40px">
    <l-header class="header">header</l-header>
    <l-content class="content">content</l-content>
    <l-content class="footer">footer</l-content>
</l-layout>

<!-- demo3 -->
<l-layout style="margin-bottom: 40px">
    <l-sider class="sider">sider</l-sider>
    <l-content class="content">content</l-content>
</l-layout>

<!-- demo4 -->
<l-layout style="margin-bottom: 40px">
    <l-header class="header">header</l-header>
    <l-layout>
        <l-sider class="sider">sider</l-sider>
        <l-content class="content">content</l-content>
    </l-layout>
</l-layout>

<!-- demo5 -->
<l-layout style="margin-bottom: 40px">
    <l-header class="header">header</l-header>
    <l-layout>
        <l-sider class="sider">sider</l-sider>
        <l-layout>
            <l-content class="content">content</l-content>
            <l-footer class="footer">footer</l-footer>
        </l-layout>
    </l-layout>
</l-layout>

<!-- demo6 -->
<l-layout style="margin-bottom: 40px">
    <l-sider class="sider">sider</l-sider>
    <l-layout>
        <l-header class="header">header</l-header>
        <l-content class="content">content</l-content>
        <l-footer class="footer">footer</l-footer>
    </l-layout>
</l-layout>
```

## Layout Attributes

|   参数    |   说明   |  类型  |        可选值         | 默认值 |
| :-------: | :------: | :----: | :-------------------: | :----: |
| direction | 排列方向 | String | horizontal / vertical |   —    |

## Header Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |

## Sider Attributes

| 参数  | 说明 |  类型  | 可选值 | 默认值 |
| :---: | :--: | :----: | :----: | :----: |
| width | 宽度 | String |   —    |   —    |

## Footer Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| height | 高度 | String |   —    |   —    |

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
