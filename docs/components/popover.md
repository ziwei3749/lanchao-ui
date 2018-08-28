---
title: Popover - 弹出框
sidebarDepth: 2
---

---

title: Button
sidebarDepth: 2

---

# Popover 弹出层 <Badge text="beta" type="warn"/>

## click 触发

<popover-demo1 />

```vue
<l-popover position='top'>
    <template slot="content">
        asdsadasdasdasdadsadadaddsdasda
    </template>
    <l-button>button</l-button>
</l-popover>
```

## hover 触发

<popover-demo2 />

```vue
<l-popover  trigger="hover" position='top'>
    <template slot="content">
        asdsadasdasdasdadsadadaddsdasda
    </template>
    <l-button>button</l-button>
</l-popover>
```

## 嵌套信息

可以在 Popover 中嵌套多种类型信息

<popover-demo3 />

```vue
<l-popover position='right'>
    <template slot="content">
        <div>这是一段内容这是一段内容确定删除吗？</div>
        <l-button>取消</l-button>
        <l-button>确定</l-button>
    </template>
    <l-button>delete</l-button>
</l-popover>
```

## Attributes

|   参数   |   说明   |  类型  |           可选值            | 默认值 |
| :------: | :------: | :----: | :-------------------------: | :----: |
| trigger  | 触发方式 | String |         click/hover         | click  |
| position | 出现位置 | String | left / right / top / bottom |  top   |

<style>
table th:nth-child(4) {
    width: 290px;
}
</style>
