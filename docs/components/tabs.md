---
title: Tabs - 标签
sidebarDepth: 2
---

# Tabs 标签 <Badge text="beta" type="warn"/>

## tabs 基本用法

<tabs-demo></tabs-demo>

```vue
<l-tabs selected="finance"
        @tab-click="handleSelected">
    <l-tabs-head>
        <l-tabs-item name="woman">美女</l-tabs-item>
        <l-tabs-item name="finance">财经</l-tabs-item>
        <l-tabs-item name="sports">体育</l-tabs-item>
    </l-tabs-head>
    <l-tabs-body>
        <l-tabs-pane name="woman">美女相关资讯</l-tabs-pane>
        <l-tabs-pane name="finance">财经相关资讯</l-tabs-pane>
        <l-tabs-pane name="sports">体育相关资讯</l-tabs-pane>
    </l-tabs-body>
</l-tabs>
```

## Tabs Attributes

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 选中的值 | String |   —    |   —    |

## TabsPane Attributes

| 参数 |  说明  |  类型  | 可选值 | 默认值 |
| :--: | :----: | :----: | :----: | :----: |
| name | 标识符 | String |   —    |   —    |

## TabsItem Attributes

|   参数   |   说明   |  类型   |   可选值   | 默认值 |
| :------: | :------: | :-----: | :--------: | :----: |
|   name   |  标识符  | String  |     —      |   —    |
| disabled | 是否禁用 | Boolean | true/false | false  |

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
