---
title: Button - 按钮
sidebarDepth: 2
---

# Button 按钮 <Badge text="beta" type="warn"/>

常用的操作按钮

## 基础用法

基础的按钮用法

<ClientOnly>
<button-demo1 />
</ClientOnly>

```vue
<l-button>默认按钮</l-button>
<l-button icon="settings">icon默认按钮</l-button>
<l-button iconPosition="right" icon="thumbs-up">icon右侧按钮</l-button>
<l-button :loading="true">加载按钮</l-button>
<l-button disabled>disabled按钮</l-button>
```

## 禁用状态

按钮不可用状态。

<button-demo2 />

```vue
<l-button disabled>disabled按钮</l-button>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<button-demo3 />

```vue
<l-button>默认按钮</l-button>
<l-button icon="settings">icon默认按钮</l-button>
<l-button iconPosition="right" icon="thumbs-up">icon右侧按钮</l-button>
<l-button :loading="true">加载按钮</l-button>
<l-button disabled>disabled按钮</l-button>
```

## 组合按钮

以按钮组的方式出现，常用于多项类似操作。

<button-demo4 />

```vue
<l-button-group>
    <l-button icon="left">上一页</l-button>
    <l-button>更多</l-button>
    <l-button icon="right" icon-position="right">下一页</l-button>
</l-button-group>
```

## 加载按钮

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<button-demo5 />

```vue
<l-button :loading="true">加载按钮</l-button>
```

## Attributes

|     参数     |      说明      |  类型   |         可选值          | 默认值 |
| :----------: | :------------: | :-----: | :---------------------: | :----: |
|     icon     |    图标类名    | String  |            —            |   —    |
| iconPosition |    图标位置    | String  |      left / right       |  left  |
|   loading    | 是否加载中状态 | Boolean |      true / false       | false  |
|   disabled   |  是否禁用状态  | Boolean |      true / false       | false  |
|     type     | 原生 type 属性 | String  | button / submit / reset | button |

<style>
table th:nth-child(4) {
    width: 290px;
}
</style>
