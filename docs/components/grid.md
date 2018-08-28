---
title: Grid - 网格
sidebarDepth: 2
---

# Grid 网格 <Badge text="beta" type="warn"/>

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局

<grid-demo1 />

```vue
<l-row>
    <l-col span="24"><div class="bg-purple-dark"></div></l-col>
</l-row>
<l-row>
    <l-col span="12"><div class="bg-purple"></div></l-col>
    <l-col span="12"><div class="bg-purple-light"></div></l-col>
</l-row>
<l-row>
    <l-col span="8"><div class="bg-purple"></div></l-col>
    <l-col span="8"><div class="bg-purple-light"></div></l-col>
    <l-col span="8"><div class="bg-purple"></div></l-col>
</l-row>
<l-row>
    <l-col span="6"><div class="bg-purple"></div></l-col>
    <l-col span="6"><div class="bg-purple-light"></div></l-col>
    <l-col span="6"><div class="bg-purple"></div></l-col>
    <l-col span="6"><div class="bg-purple-light"></div></l-col>
</l-row>
<l-row>
    <l-col span="4"><div class="bg-purple"></div></l-col>
    <l-col span="4"><div class="bg-purple-light"></div></l-col>
    <l-col span="4"><div class="bg-purple"></div></l-col>
    <l-col span="4"><div class="bg-purple-light"></div></l-col>
    <l-col span="4"><div class="bg-purple"></div></l-col>
    <l-col span="4"><div class="bg-purple-light"></div></l-col>
</l-row>

<style lang='scss' scoped>
* {
    box-sizing: border-box;
}
.l-row {
    margin-bottom: 20px;
}
.bg-purple-dark {
    background: #99a9bf;
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple {
    background: #d3dce6;
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple-light {
    background: #e5e9f2;
    border-radius: 4px;
    min-height: 36px;
}
</style>
```

## 分栏间隔

分栏之间存在间隔

<grid-demo2 />

```vue
<l-row :gutter="10">
    <l-col span="6"><div class="bg-purple"></div></l-col>
    <l-col span="6"><div class="bg-purple-light"></div></l-col>
    <l-col span="6"><div class="bg-purple"></div></l-col>
    <l-col span="6"><div class="bg-purple-light"></div></l-col>
</l-row>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<grid-demo3 />

```vue
<l-row :gutter="10">
    <l-col span="18"><div class="bg-purple"></div></l-col>
    <l-col span="6"><div class="bg-purple-light"></div></l-col>
</l-row>
<l-row :gutter="10">
    <l-col span="9"><div class="bg-purple"></div></l-col>
    <l-col span="9"><div class="bg-purple-light"></div></l-col>
    <l-col span="3"><div class="bg-purple"></div></l-col>
    <l-col span="3"><div class="bg-purple-light"></div></l-col>
</l-row>
<l-row :gutter="10">
    <l-col span="3"><div class="bg-purple-light"></div></l-col>
    <l-col span="18"><div class="bg-purple"></div></l-col>
    <l-col span="3"><div class="bg-purple-light"></div></l-col>
</l-row>
```

## 分栏偏移

支持偏移指定的栏数。

<grid-demo4 />

```vue
<l-row>
    <l-col span="6"><div class="bg-purple"></div></l-col>
    <l-col span="6" :offset="6"><div class="bg-purple"></div></l-col>
</l-row>
<l-row :gutter="10">
    <l-col span="6" :offset="6"><div class="bg-purple"></div></l-col>
    <l-col span="6" :offset="6"><div class="bg-purple"></div></l-col>
</l-row>
<l-row :gutter="10">
    <l-col span="6" :offset="6"><div class="bg-purple"></div></l-col>
    <l-col span="6" ><div class="bg-purple"></div></l-col>
</l-row>
```

## 响应式布局

参照了 Bootstrap 的 响应式设计，注意参数名不同。

预设了 1 个默认尺寸和 4 个响应尺寸：ipad、narrowPc、pc、widePc 和 默认的移动端尺寸。

<grid-demo5 />

::: tip
一个简单的示例,试试看在 iphone / ipad / narrow-pc 不同的布局效果。
:::

```vue
<l-row gutter="20">
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
    <l-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}"><div class="bg-purple-dark"></div></l-col>
</l-row>
```

## Row Attributes

|  参数  | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :--: | :----: | :----: | :----: |
| gutter | 间隔 | Number |   —    |   —    |

## Col Attributes

|   参数   |        说明        |  类型  |            可选值             | 默认值 |
| :------: | :----------------: | :----: | :---------------------------: | :----: |
|   span   |   栅格占据的列数   | Number |               —               |   —    |
|  offset  | 栅格左侧的间隔格数 | Number |               —               |   —    |
|   ipad   |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
| narrowPc |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|    pc    |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |
|  widePc  |    栅格属性对象    | Object | (例如： {span: 4, offset: 4}) |   —    |

<style>

table th:nth-child(1n) {
    width: 100px;
}


table th:nth-child(4n) {
    width: 290px;
}

</style>
