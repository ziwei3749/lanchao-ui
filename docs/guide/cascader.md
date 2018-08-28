# 递归组件实现cascader级联组件


实现一个组件，需要注意许多细节，如果一开始就考虑做到完美，往往无从下手

但是我觉得组件的核心功能，应该是脉络清晰的，不需要很多代码就能实现的

那么本文的目标就是沿着这条脉络，尽可能清楚的梳理出cascader组件的核心实现，从无从下手变得思路清晰。

***如果有兴趣的还是到github上研究源码，只看文章可能只是了解思路，无法真正搞清楚细节***

## 组件预览

<cascader-demo1></cascader-demo1>

首先预览一下cascader级联组件的样式

[可以参考核心代码的一个demo](https://github.com/ziwei3749/practice)

[可以参考element-ui的cascader组件](http://element.eleme.io/#/zh-CN/component/cascader)

## 思路分析

封住组件前，如果无从下手，那么你可以做2件事。

- 第一是观察组件的外观，是怎样的构造
- 第二是面向接口编程，我们不去管组件如何实现，先思考怎样调用。

如果是常用组件也可以参考各种ui框架的参数

那么以cascader组件为例，

- 1 观察外观。

我们可以发现它是上下结构。

有一个类似button的触发器，有一个类似popover的弹出层
popover这个弹出层里到底有多少个list不固定，所以很可能要用到递归组件

- 2 面向接口编程。

我们可以去思考这个组件应该如何调用，以elemnt-ui为例子

```vue
<el-cascader
  :selected="selected"
  :source="source"
></el-cascader>
```

- selected: 当用户click省市区时，selected的值也会变化，是一个省市区组成的数组
- source: 是数据源

那么通过 观察组件外观 + 面向接口编程 ==> 得到几个思路

- 思路1: 首先cascader组件至少接受2个props source和selected
- 思路2: cascader组件内部的结构，分2个部分，trigger和popover弹出层，而弹出层部分很可能要用一个递归组件
- 思路3: 既然是递归组件，那肯定有一个递归逻辑，同时要有一个终止递归的判断。这个判断就是如果click的某一个item不存在children的话，就应该不去调用递归组件。


## 具体实现

那么就参照这个3个思路去实现。

首先创建3个文件  

- demo.vue

```vue
<Cascader :source="source" :selected.sync="selected"></Cascader>
```

- cascader.vue

```vue
<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisable = !popoverVisable">
            {{selectedResult}}
        </div>
        <div class="popover" v-if="popoverVisable">
            <cascader-item :items="source"
                           :selected="selected"
                           :level="0"
                           @update:selected="onUpdateSelected">
            </cascader-item>
        </div>
    </div>
</template>

```

- cascader-item.vue
```vue
<template>
    <div class="cascader-item">
        <div class="left">
            <div v-for="item in items" @click="updateSelected(item)">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems"
                           :selected="selected"
                           :level="level+1"
                           @update:selected="onUpdateSelected">
            </cascader-item>
        </div>
    </div>
</template>
```


cascader.vue内部的结构，就上分为trigger和popover 2个部分

其实trigger就是控制 open/close的简单逻辑。而popover就是调用了递归组件cascader-item.vue


在cascader-item.vue中,有2个关键点

关键1: 用户click后，需要updateSelected，但是子组件并没有直接更新，而是遵循单向数据流，一层层$emit到最上层再更新selected

关键2：递归组件的退出条件判定，是根据rightItems

而这个rightItems是一个计算属性。

他是根据this.selected的最后一项，是否有children来判断是否显示的。

同时如果隐藏的话，也就不再渲染cascader-item，所以也就退出了递归的循环。

```vue
<script>
 computed: {
        rightItems() {
            let selectedItem = this.selected[this.level];
            if (
                selectedItem &&
                selectedItem.children &&
                selectedItem.children.length > 0
            ) {
                return selectedItem.children;
            }
        }
    },
</script>
```

可以关注一下这个计算属性，其实还让弹出层的显示逻辑，跟selected数组的值有了关联。

比如当click时，我们通过更新selected，就可以让弹出层的显示逻辑也没有问题。

```js
updateSelected(item) {
    let selectedCopy = JSON.parse(JSON.stringify(this.selected));
    selectedCopy[this.level] = item;
    selectedCopy.splice(this.level + 1);
    this.$emit("update:selected", selectedCopy);
},
```




## 注意

- cascader的实现思路
    + 面向接口编程。接受selected和source参数
    + 那么cascader组件内部构造，一个trigger，一个popover。其中Popover是递归组件
    + 递归组件，思考2点。1需要描述一个递归的循环逻辑,2退出递归的判断

- 注意单项数据流
- 如果要修改数据的考虑是否需要深拷贝

