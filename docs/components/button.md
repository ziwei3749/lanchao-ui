---
title: Button
sidebarDepth: 2
---

# Button 按钮 <Badge text="beta" type="warn"/>

常用的操作按钮

## 基础用法

基础的按钮用法

<button-default />

```vue
<l-button>默认按钮</l-button>
<l-button icon="settings">icon默认按钮</l-button>
<l-button iconPosition="right" icon="thumbs-up">icon右侧按钮</l-button>
<l-button :loading="true">加载按钮</l-button>
<l-button disabled>disabled按钮</l-button>
```

## 禁用状态

按钮不可用状态。

<button-disabled />

```vue
<l-button disabled>disabled按钮</l-button>
```

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<button-icon />

```vue
<l-button>默认按钮</l-button>
<l-button icon="settings">icon默认按钮</l-button>
<l-button iconPosition="right" icon="thumbs-up">icon右侧按钮</l-button>
<l-button :loading="true">加载按钮</l-button>
<l-button disabled>disabled按钮</l-button>
```

## 组合按钮

以按钮组的方式出现，常用于多项类似操作。

<button-group />

```vue
<l-button-group>
    <l-button icon="left">上一页</l-button>
    <l-button>更多</l-button>
    <l-button icon="right" icon-position="right">下一页</l-button>
</l-button-group>
```

## 加载按钮

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<button-loading />

```vue
<l-button :loading="true">加载按钮</l-button>
```
