---
title: Menu - 导航菜单
sidebarDepth: 2
---

# Menu 导航菜单 <Badge text="beta" type="warn"/>

为网站提供导航功能的菜单。

## 顶栏

适用广泛的基础用法。

<ClientOnly>
<menu-demo1 />
</ClientOnly>

```vue
<l-menu :selected.sync="selected"
        mode="horizontal">
    <l-menu-item name="home">Github</l-menu-item>
    <l-sub-menu name="about">
        <template slot="title">关于</template>
        <l-menu-item name="about1">关于1</l-menu-item>
        <l-menu-item name="about2">关于2</l-menu-item>
        <l-sub-menu name="lian_xi_fang_shi">
            <template slot="title">联系方式</template>
            <l-menu-item name="qq">QQ</l-menu-item>
            <l-menu-item name="wx">微信</l-menu-item>
            <l-sub-menu name="mobile">
                <template slot="title">手机</template>
                <l-menu-item name="移动">移动</l-menu-item>
                <l-menu-item name="联通">联通</l-menu-item>
            </l-sub-menu>
        </l-sub-menu>
    </l-sub-menu>
    <l-menu-item name="hire">招聘</l-menu-item>
    <l-sub-menu name="other">
        <template slot="title">其他</template>
        <l-menu-item name="other1">其他1</l-menu-item>
        <l-menu-item name="other2">其他2</l-menu-item>
        <l-menu-item name="other3">其他3</l-menu-item>
    </l-sub-menu>
</l-menu>
```

## 侧栏

垂直菜单，可内嵌子菜单。


<ClientOnly>
<menu-demo2 />
</ClientOnly>


```vue
<l-menu :selected.sync="selected"
        mode="vertical">
    <l-menu-item name="github">Github</l-menu-item>
    <l-sub-menu name="about">
        <template slot="title">关于</template>
        <l-menu-item name="about1">关于1</l-menu-item>
        <l-menu-item name="about2">关于2</l-menu-item>
        <l-sub-menu name="lian_xi_fang_shi">
            <template slot="title">联系方式</template>
            <l-menu-item name="qq">QQ</l-menu-item>
            <l-menu-item name="wx">微信</l-menu-item>
            <l-sub-menu name="mobile">
                <template slot="title">手机</template>
                <l-menu-item name="移动">移动</l-menu-item>
                <l-menu-item name="联通">联通</l-menu-item>
            </l-sub-menu>
        </l-sub-menu>
    </l-sub-menu>
    <l-menu-item name="hire">招聘</l-menu-item>
    <l-sub-menu name="other">
        <template slot="title">其他</template>
        <l-menu-item name="other1">其他1</l-menu-item>
        <l-menu-item name="other2">其他2</l-menu-item>
        <l-menu-item name="other3">其他3</l-menu-item>
    </l-sub-menu>
</l-menu>
```

## Menu Attributes

|   参数   |        说明        |  类型   |         可选值          |  默认值  |
| :------: | :----------------: | :-----: | :---------------------: | :------: |
|   mode   |        模式        | Boolean |   horizontal/vertical   | vertical |
| selected | 被选中的 menu-item | String  |            —            |    —     |
| loading  |   是否加载中状态   | Boolean |      true / false       |  false   |
| disabled |    是否禁用状态    | Boolean |      true / false       |  false   |
|   type   |   原生 type 属性   | String  | button / submit / reset |  button  |

## MenuItem/SubItem Attributes

| 参数 |   说明   |  类型  | 可选值 | 默认值 |
| :--: | :------: | :----: | :----: | :----: |
| name | 唯一标识 | String |  必填  |   —    |

## Menu Methods

|       事件       |        说明         |     参数      |
| :--------------: | :-----------------: | :-----------: |
| @update:selected | selected 改变时触发 | 被选中的 item |

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
