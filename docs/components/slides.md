---
title: Slides - 轮播图
sidebarDepth: 2
---

# Slides 轮播图 <Badge text="beta" type="warn"/>

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

适用广泛的基础用法

<ClientOnly>
<slides-demo1 />
</ClientOnly>

```vue
<l-slides :selected.sync="selected">
    <l-slides-item name="first"><div class="box">1</div></l-slides-item>
    <l-slides-item name="second"><div class="box">2</div></l-slides-item>
    <l-slides-item name="third"><div class="box">3</div></l-slides-item>
</l-slides>

<script>  
data() {
        return {
            selected: "second"
        };
    },
</script>

<style>
.box {
    height: 300px;
    width: 100%;
    background: #99a9bf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>
```

::: tip
- 轮播图大小根据用户的box自动适配
- 同时支持移动端的左右滑动
- 自动轮播模式下，鼠标移入时停止轮播，移出恢复轮播
:::

## Slides Attributes

|     参数      |      说明       |      类型       |    可选值    | 默认值 |
| :-----------: | :-------------: | :-------------: | :----------: | :----: |
|   selected    | 当前选中项 name | String / Number |      —       | 第一项 |
|   autoPlay    |  是否自动播放   |     Boolean     | true / false | false  |
| autoPlayDelay |    轮播间隔     |     Number      |      —       |  3000  |

## SlidesItem Attributes

| 参数 |   说明   |  类型  | 可选值 | 默认值 |
| :--: | :------: | :----: | :----: | :----: |
| name | 当前项的标识 | String |   —    |   —    |

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
