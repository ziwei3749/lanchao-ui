---
title: Input
sidebarDepth: 2
---

# Input 输入框 <Badge text="beta" type="warn"/>

常用的操作按钮

## 基础用法

<input-demo1 />

```vue
<l-input v-model="username" placeholder="输入用户名"></l-input>
<l-input value="王五" disabled placeholder="输入用户名"></l-input>
<l-input value="老吕" placeholder="输入用户名" error='姓名不能少于2个字'></l-input>
```

## Input Attributes

|    参数     |        说明        |      类型       |    可选值    | 默认值 |
| :---------: | :----------------: | :-------------: | :----------: | :----: |
|    value    |       绑定值       | string / number |      —       |   —    |
| placeholder |   输入框占位文本   |     String      |      —       |   —    |
|  readonly   | 原生属性，是否只读 |     Boolean     | true / false | false  |
|  disabled   |    是否禁用状态    |     Boolean     | true / false | false  |
|    type     |   原生 type 属性   |     String      |      —       |  text  |

## Input Events

| 事件名称 |          说明           | 回调参数 |
| :------: | :---------------------: | :------: |
|   blur   | 在 Input 失去焦点时触发 |  event   |
|  focus   | 在 Input 获得焦点时触发 |  event   |
|  change  |  在 Input 值改变时触发  |  value   |

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
