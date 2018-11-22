---
title: Pager - 分页
sidebarDepth: 2
---

# Pager 分页 <Badge text="beta" type="warn"/>

## 基础用法

<ClientOnly>
<pager-demo1 />
</ClientOnly>

打开控制台，可以看到点击页码时，打印的 onCurrentChange 的参数

```vue
<l-pager
    :total-page="10"
    :current-page.sync="currentPage"
    @currentChange="onCurrentChange"
>
</l-pager>
```

## Attributes

|     参数      |        说明         |  类型   |    可选值    | 默认值 |
| :-----------: | :-----------------: | :-----: | :----------: | :----: |
|   totalPage   |       总页数        | Number  |      —       |  必填  |
|  currentPage  |      当前页码       | Number  |      —       |  必填  |
| hideIfOnePage | 当前页码为 1 时隐藏 | Boolean | true / false |  true  |

## Events

|   事件名称    |          说明          | 回调参数 |
| :-----------: | :--------------------: | :------: |
| currentChange | 在 「页码」 变化时触发 | 当前页码 |

<style>

table th:nth-child(1) {
    width: 100px;
}

table th:nth-child(2) {
    width: 240px;
}


table th:nth-child(3) {
    width: 100px;
}
</style>
